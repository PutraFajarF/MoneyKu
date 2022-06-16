import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDk68cG2wcSx8tla1fYJ3NVttgkuv0BKY8",
  authDomain: "moneyku-5b100.firebaseapp.com",
  projectId: "moneyku-5b100",
  storageBucket: "moneyku-5b100.appspot.com",
  messagingSenderId: "578729562446",
  appId: "1:578729562446:web:50602e25abbd8b5065ce1f"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();

export { projectFirestore };
