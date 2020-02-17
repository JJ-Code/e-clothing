  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
const config = {
      apiKey: "AIzaSyCi4csyXRHAuh1Lwx_CAUG8MBku_Amjjkk",
      authDomain: "e-clothing-e3de2.firebaseapp.com",
      databaseURL: "https://e-clothing-e3de2.firebaseio.com",
      projectId: "e-clothing-e3de2",
      storageBucket: "e-clothing-e3de2.appspot.com",
      messagingSenderId: "1012670479110",
      appId: "1:1012670479110:web:4a6d481af590264f217c87",
      measurementId: "G-1JCH9NKFC8"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
