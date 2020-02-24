import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {

  //if this user return auth obj is not null  (aka not login) then query the users collection in the firebase database
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();


  //This gets the different collections
  // const collectionRef = firestore.collection(`users`);
  // const collectionSnapshot = await collectionRef.get();
  // console.log({
  //   collection: collectionSnapshot.docs.map(doc=> doc.data())
  // });


  if (!snapShot.exists) {
    const {
      displayName,
      email
    } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
    console.log(newDocRef);

  });

  return await batch.commit();
};




export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const {
      title,
      items
    } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  console.log(transformedCollection);

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};




export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;