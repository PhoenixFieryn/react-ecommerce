import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD8MAiYO5oSr4kesNQGfIyeVT7gob8vARk',
	authDomain: 'react-ecommerce-db-20806.firebaseapp.com',
	projectId: 'react-ecommerce-db-20806',
	storageBucket: 'react-ecommerce-db-20806.appspot.com',
	messagingSenderId: '37538569343',
	appId: '1:37538569343:web:e89cee4ecbfa6e84a4334a',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.error('error creating user', error.message);
		}
	}

	return userRef;
};

if (firebase.apps.length === 0) {
	firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
