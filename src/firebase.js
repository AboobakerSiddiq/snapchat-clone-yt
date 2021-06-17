import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAF2wuJdEd2vVwE8FS3CzeYXEvMVNa-o9w",
    authDomain: "snapchat-clone-yt-2302b.firebaseapp.com",
    projectId: "snapchat-clone-yt-2302b",
    storageBucket: "snapchat-clone-yt-2302b.appspot.com",
    messagingSenderId: "901066597535",
    appId: "1:901066597535:web:bf857a1f857552de89eeaa"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();//check it a
  const auth=firebase.auth();
  const storage=firebase.storage();
  const provider=new firebase.auth.GoogleAuthProvider();

  export{db,auth,storage,provider};
