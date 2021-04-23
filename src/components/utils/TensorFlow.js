import * as automl from '@tensorflow/tfjs-automl';

export const getImageLabel = async (image) => {
    const modelUrl = 'model.json';
    const model = await automl.loadImageClassification(modelUrl);
    const predictions = await model.classify(image);
    console.log(predictions);
    return predictions
}
