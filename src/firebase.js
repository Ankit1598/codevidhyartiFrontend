import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyBfHfCzZbs-spZXy0MHlR_PEGMRsqsDTYY",
	authDomain: "codevidhyarti2.firebaseapp.com",
	projectId: "codevidhyarti2",
	storageBucket: "codevidhyarti2.appspot.com",
	messagingSenderId: "199830037315",
	appId: "1:199830037315:web:dd60ba95622804bc8685f6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp({
// 	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// 	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// 	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

export const db = firebaseApp.firestore();

export const auth = firebase.auth();
