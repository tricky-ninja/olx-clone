import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAcF3zAonrYKUW2cq2CQctUWrkeLD2B4Lo",
    authDomain: "olx-clone-a493b.firebaseapp.com",
    projectId: "olx-clone-a493b",
    storageBucket: "olx-clone-a493b.appspot.com",
    messagingSenderId: "421186438868",
    appId: "1:421186438868:web:8f47d4d15a0678ecd15d41"
  };

export default firebase.initializeApp(firebaseConfig);