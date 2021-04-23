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

export const createNewUser = async (name, pass) => {
    let users = await getAllUsers() || [];
    let valid = users.filter(x => x.name === name);
    if(valid.length > 0) {
        return false;
    }
    await db.collection('users').add({name: name, pass: pass});
    return true;
};

export const getAllUsers = async () => {
    let snapshot = await db.collection('users').get();
    return snapshot.docs.map(doc => doc.data());
}

export const loginUser = async (name, pass) => {
    let users = await getAllUsers() || [];
    let valid = users.filter(x => x.name === name && x.pass === pass);
    return valid.length > 0;
}

export const writeMessage = async (sender, receiver, message) => {
    return await db.collection('messages').add({
        sender: sender,
        receiver: receiver,
        message: message,
        date: new Date()
    });
}

export const getAllMessages = async () => {
    let snapshot = await db.collection('messages').get();
    return snapshot.docs.map(doc => doc.data());
}

export const viewAllUserMessages = async (user) => {
    let mess = await getAllMessages();
    let filtered = mess.filter(x => x.sender === user || x.receiver === user);
    let messages = []
    filtered.forEach(x => {
        let present = false;
        messages.forEach(y => {
            if((y.sender === x.sender && y.receiver === x.receiver) || (y.receiver === x.sender && y.sender === x.receiver)) present = true;
        })
        if(!present) messages.push(x);
    })
    return messages
}

export const getConversation = async (u1, u2) => {
    let mess = await getAllMessages();
    let filtered = mess.filter(x=> (x.sender === u1 && x.receiver === u2) || (x.sender === u2 && x.receiver === u1));
    return filtered;
}
