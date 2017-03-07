import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD2sjI76WdwJFX7k4UKs9eXwkHGvqLR60E",
    authDomain: "todoapp-e5dec.firebaseapp.com",
    databaseURL: "https://todoapp-e5dec.firebaseio.com",
    storageBucket: "todoapp-e5dec.appspot.com",
    messagingSenderId: "614431980664"
};

export const firebaseApp = firebase.initializeApp(config);

export const todosRef = firebase.database().ref('todos');