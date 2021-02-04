import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBfHfCzZbs-spZXy0MHlR_PEGMRsqsDTYY",
	authDomain: "codevidhyarti2.firebaseapp.com",
	projectId: "codevidhyarti2",
	storageBucket: "codevidhyarti2.appspot.com",
	messagingSenderId: "199830037315",
	appId: "1:199830037315:web:dd60ba95622804bc8685f6",
});

export const db = firebaseApp.firestore();

export const auth = firebase.auth();
