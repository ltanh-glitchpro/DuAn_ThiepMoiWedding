
/*
  Paste your Firebase config here and uncomment usage in utils/api.js
  Example:
  import { initializeApp } from "firebase/app";
  import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

  const firebaseConfig = { ... }
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export async function sendRSVP(data){
    const docRef = await addDoc(collection(db, "invites"), {...data, createdAt: serverTimestamp()})
    return docRef.id;
  }
*/
