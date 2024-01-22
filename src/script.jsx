import { createRoot } from 'react-dom/client';
import React from 'react';
import * as tf from '@tensorflow/tfjs';
//equivalent: 
import * as styles from './style.module.scss';
import * as placeholder_image_src_url from './assets/placeholder.jpg?w=224&h=224';
import { showImageFilePicker } from './show_open_image_file_picker.js';
import { IoInformationCircleOutline } from "react-icons/io5";

class TitleBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.title_toolbar}>
        <span className={styles.app_title_text}>
          OtoFind - Ear Disease Diagnosis
        </span>
        <span className={styles.app_title_info}>
          <IoInformationCircleOutline onClick={() => this.props.onInfoClick()} />
        </span>
      </div>
    );
  }
}


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

class InfoModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.info_modal} style={{display: this.props.show ? 'flex' : 'none'}}>
        <div className={styles.info_modal_content}>
          <span className={styles.info_modal_close} onClick={this.props.onClose}>&larr; Back</span>
          <h1>About OtoFind</h1>
          <p>Welcome to OtoFind, your revolutionary health companion! Leveraging advanced machine learning, our app offers accurate and cost-effective diagnoses for conditions like Acute Otitis Media and Chronic Suppurative Otitis Media. Paired with a 3D-printed, smartphone-attachable otoscope, it captures inner ear images effortlessly.</p>
          <p>Easy for anyone to use, just tap the camera icon, select a photo, and let our model swiftly predict diseases based on otoscope images. The speed is remarkable - all three machine learning models run in under a second!</p>
          <p>OtoFind goes beyond convenience, providing precise diagnoses, particularly benefiting underserved areas. Whether in remote regions, low-income communities, or countries with limited healthcare access, our app ensures efficient healthcare solutions.</p>
          <p>Take control of your health – diagnose possible ear infections/diseases with ease. Explore app functionality with sample images and capture your own ear canal using the camera option. Your health, your control, with OtoFind.</p>
        </div>
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
      showInfoModal: false,
    };
  }

  async runPredictions() {
    let image = await showImageFilePicker();
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
        <TitleBar onInfoClick={() => this.setState({showInfoModal: true})} />
        <InfoModal show={this.state.showInfoModal} onClose={() => this.setState({showInfoModal: false})} />
        <ResultView predictions={this.state.showInfoModal ? null : this.state.predictions} imageUrl={this.state.imageUrl} />
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
