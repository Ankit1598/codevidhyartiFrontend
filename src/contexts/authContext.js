import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";

const AuthContext = createContext();

export const useAuthValue = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const register = async (email, password) => {
		const user = await auth.createUserWithEmailAndPassword(email, password);
		return user;
	};

	const login = async (email, password) => {
		const user = await auth.signInWithEmailAndPassword(email, password);
		return user;
	};

	const signOut = async () => {
		return auth.signOut();
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				db.collection("users")
					.doc(user.uid)
					.get()
					.then((doc) => {
						setCurrentUser({
							uid: user.uid,
							email: user.email,
							newUser: doc.data().newUser,
							name: doc.data().name,
							number: doc.data().number,
						});
					});
			} else {
				setCurrentUser(null);
			}
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = { db, currentUser, register, login, signOut, setCurrentUser };
	return (
		<>
			<AuthContext.Provider value={value}>
				{!loading && children}
			</AuthContext.Provider>
		</>
	);
};

export default AuthProvider;
