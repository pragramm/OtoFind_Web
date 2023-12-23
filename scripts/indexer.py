import os
import json

image_files = {
    'normal': [f"./dist/static/tympanic_membrane_dataset/normal/{file}" for file in os.listdir('./dist/static/tympanic_membrane_dataset/normal') if file.endswith('.png')],
    'abnormal/aom': [f"./dist/static/tympanic_membrane_dataset/abnormal/aom/{file}" for file in os.listdir('./dist/static/tympanic_membrane_dataset/abnormal/aom') if file.endswith('.png')],
    'abnormal/csom': [f"./dist/static/tympanic_membrane_dataset/abnormal/csom/{file}" for file in os.listdir('./dist/static/tympanic_membrane_dataset/abnormal/csom') if file.endswith('.png')],
    'abnormal/earwax': [f"./dist/static/tympanic_membrane_dataset/abnormal/earwax/{file}" for file in os.listdir('./dist/static/tympanic_membrane_dataset/abnormal/earwax') if file.endswith('.png')],
}

print(json.dumps(image_files))