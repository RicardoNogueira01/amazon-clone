import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDWQfqiqMCDfQAOdAeac5YS3QXt5C-0Bfo',
	authDomain: 'clone-3eb7d.firebaseapp.com',
	projectId: 'clone-3eb7d',
	storageBucket: 'clone-3eb7d.appspot.com',
	messagingSenderId: '61324506622',
	appId: '1:61324506622:web:9a0987238ebb998aba3caf',
	measurementId: 'G-BC6MYVQY74',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//real time db in firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
