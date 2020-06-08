import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCmHZ6rDVuwsUOjMLbK0vpUAcp4V9zLmVs",
    authDomain: "fir-app-d5b32.firebaseapp.com",
    databaseURL: "https://fir-app-d5b32.firebaseio.com",
    projectId: "fir-app-d5b32",
    storageBucket: "fir-app-d5b32.appspot.com",
    messagingSenderId: "609590467362",
    appId: "1:609590467362:web:5c21e1b1fec24d4dbc237b",
    measurementId: "G-6XYCYJT2XY"
};

class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
  
      this.auth = app.auth();
      this.db = app.database();
    }
  
    // *** Auth API ***
  
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  
    // *** User API ***
  
    user = uid => this.db.ref(`users/${uid}`);
  
    users = () => this.db.ref('users');
  }
export default Firebase;