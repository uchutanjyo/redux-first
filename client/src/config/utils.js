
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";

import { firebaseConfig } from "./firebase";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider=new GoogleAuthProvider()

// const GoogleProvider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account'})

const signInWithGoogle = () => signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});


 const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const { uid, displayName, email } = userAuth;
  // const usersRef = collection(db, 'users')

  const userRef = doc(db, 'users', uid)

  
  // const docSnap = await getDoc(doc(db, 'users', uid))
  // console.log(docSnap)
    try {
      await setDoc(userRef, { displayName, email }, { merge: true })
    console.log('sdsdfsdff', userRef)
   }
    catch(error) {
    console.log(error);
  };
  
  console.log('didit')
  return userRef
 }

  // console.log('sssss', userAuth, userRef)
  // const userRef = db.doc(`users/${uid}`)
  // console.log('sssss', userAuth, userRef)

  // const snapshot = await userRef.get();
  // console.log(userAuth, snapshot, 'ui')

  // if(!snapshot.exists) {
  //   const { displayName, email } = userAuth
  //   const timestamp = new Date()
  //   console.log(userAuth, 'ui')
  //   try {
  //     await userRef.set({
  //     displayName,
  //     email,
  //     createdDate: timestamp,
  //     ...additionalData
  //     })
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }
  // return userRef;




export { db, auth, storage, provider, handleUserProfile, signInWithGoogle };

 
