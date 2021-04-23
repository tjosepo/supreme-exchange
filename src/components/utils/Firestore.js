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

export const createNewPost = async (post) => {
    return await db.collection('posts').add(post);
};

export const getAllPosts = async () => {
    let snapshot = await db.collection('posts').get();
    return snapshot.docs.map(doc => doc.data());
}

export const getAllPostsWithTitle = async (title) => {
    let list = await getAllPosts();
    return list.filter(e => e.title.toLowerCase() === title.toLowerCase());
}

export const getSpecificPost = async (title, user) => {
    let list = await getAllPosts();
    return list.filter(e => e.title.toLowerCase() === title.toLowerCase() && e.user.toLowerCase() === user.toLowerCase())[0];
}
