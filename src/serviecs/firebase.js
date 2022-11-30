import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZ8QcCUyj08fWFoAu49KiZMuu6oUlI1Jw",
    authDomain: "vuejschatapp-35807.firebaseapp.com",
    databaseURL: "https://vuejschatapp-35807-default-rtdb.firebaseio.com",
    projectId: "vuejschatapp-35807",
    storageBucket: "vuejschatapp-35807.appspot.com",
    messagingSenderId: "100729570575",
    appId: "1:100729570575:web:8932e2e2192940cf3c6a7a"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;