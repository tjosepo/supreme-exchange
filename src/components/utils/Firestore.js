import firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ?? '',
    authDomain: "supreme-exchange.firebaseapp.com",
    databaseURL: "https://supreme-exchange-default-rtdb.firebaseio.com",
    projectId: "supreme-exchange",
    storageBucket: "supreme-exchange.appspot.com",
    messagingSenderId: "1045699255100",
    appId: "1:1045699255100:web:d87667ae7429a04f991c39"
  };

firebase.initializeApp(config)
const db = firebase.firestore()

export const createNewPost = (user, name, image, price, condition, negotiable, location) => {
    return db.collection('posts')
        .add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: user,
            name: name,
            image: image,
            price: price,
            condition: condition,
            negotiable: negotiable,
            location: location
        });
};
