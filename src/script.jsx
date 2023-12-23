import { createRoot } from 'react-dom/client';
import React from 'react';
import * as tf from '@tensorflow/tfjs';
//equivalent: 
import * as styles from './style.module.scss';
import * as placeholder_image_src_url from './assets/placeholder.jpg?w=224&h=224';

class CameraToolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.camera_toolbar}>
        <button onClick={this.props.onButton1Click}>
          Upload Image
        </button>
        <button onClick={this.props.onButton2Click}>
          Random Demo
        </button>
      </div>
    );
  }
}

function ResultOverlay(props) {
  if(!props.predictions) return (
    <></>
  );
  console.log(props.predictions)
  let table_rows = Object.entries(props.predictions).map(([name, value], index) => (
    <tr key={index}>
      <td>{name}</td>
      <td /*style={{'--sparkline-value': value}}*/x>{(value * 100).toFixed(2)}%</td>
    </tr>
  ))
  return (
    <table className={styles.result_overlay}>
      <tbody>
        {table_rows}
      </tbody>
    </table>
  );
}

class ResultView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.result_view}>
        <img src={this.props.imageUrl} width="224" height="224" />
        <ResultOverlay predictions={this.props.predictions} />
      </div>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predictions: null,
      imageUrl: placeholder_image_src_url,
    };
  }

  async runPredictions() {
    let image_file = await showOpenFilePicker({
      types: [
        {
          description: 'Image files',
          accept: {
            'image/*': ['.jpg', '.jpeg', '.png', '.gif'],
          },
        },
      ],
      excludeAcceptAllOption: true,
      multiple: false,
    });
    //console.log(image_file)
    if (!image_file) return;
    image_file = image_file[0];
    let image = await image_file.getFile();
    let image_file_url = URL.createObjectURL(image);
    await this.runPredictionsFromURL(image_file_url);
  }

  async runPredictionsFromRandomImage(event) {
    let random_selection = (await import('./get_random_image.js')).default();
    event.target.innerText = `label: ${random_selection.className}`;
    this.runPredictionsFromURL(random_selection.random_image_url);
  }

  async runPredictionsFromURL(image_url) {
    let image_element = document.createElement('img');
    image_element.src = image_url;
    await image_element.decode();

    let tensor = tf.browser.fromPixels(image_element);
    tensor = tf.image.resizeBilinear(tensor, [224, 224]);
    tensor = tf.cast(tensor, 'float32');
    tensor = tf.expandDims(tensor, 0);
    //tensor = tf.div(tensor, 255.0);
    let predictions = {};
    for (let [name, model] of Object.entries(this.props.models)) {
      let prediction = await model.then((model) => model.predict(tensor));
      //console.log(prediction);
      predictions[name] = 1 - (await prediction.array())[0][0];
    }
    //console.log(predictions);
    if (this.state.imageUrl != placeholder_image_src_url) {
      URL.revokeObjectURL(this.state.imageUrl);
    }
    this.setState({
      predictions: predictions,
      imageUrl: image_url,
    });
  }

  render() {
    return (
      <div className={styles.app_container}>
        <ResultView predictions={this.state.predictions} imageUrl={this.state.imageUrl} />
        <CameraToolbar onButton1Click={this.runPredictions.bind(this)} onButton2Click={this.runPredictionsFromRandomImage.bind(this)} />
      </div>
    );
  }
}

(async() => {
  if (!await tf.setBackend('webgl')) {
    await tf.setBackend('cpu');
  }
  let models = {
    'Acute Otitis Media': tf.loadGraphModel('./static/models/compiled/OtoCNN_keras_AOM-final-tfjs/model.json'),
    'Chronic Suppurative Otitis Media': tf.loadGraphModel('./static/models/compiled/OtoCNN_keras_CSOM-final-tfjs/model.json'),
    'Excessive Earwax': tf.loadGraphModel('./static/models/compiled/OtoCNN_keras_Earwax-final-tfjs/model.json'),
  }
  createRoot(document.getElementById('app_root')).render(<App models={models} />);
})();
