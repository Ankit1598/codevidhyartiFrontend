import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
	FormContainer,
	Form,
	Caption,
	FormInput,
	Label,
	Input,
	FormButton,
} from "./LoginSignup.elements";
import { auth, db } from "../../firebase";

const Register = ({ setOpen, data }) => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [number, setNumber] = useState();
	const [password, setPassword] = useState();
	const [passwordConfirm, setPasswordConfirm] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState();
	const history = useHistory();

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	if (passwordRef.current.value !== passwordConfirmRef.current.value) {
	// 		return setError("Passwords do not match");
	// 	}

	// 	try {
	// 		setError("");
	// 		setLoading(true);
	// 		const resp = await register(
	// 			emailRef.current.value,
	// 			passwordRef.current.value
	// 		);
	// 		db.collection("users").doc(resp.user.uid).set({
	// 			uid: resp.user.uid,
	// 			newUser: true,
	// 			name: nameRef.current.value,
	// 			email: emailRef.current.value,
	// 			number: numberRef.current.value,
	// 		});
	// 		// await resp.user.sendEmailVerification();
	// 		setOpen(false);
	// 		await displayRazorpay(
	// 			Number(data.oldPrice),
	// 			data.heading,
	// 			resp.user.uid,
	// 			setCurrentUser,
	// 			db
	// 		);
	// 	} catch (err) {
	// 		setError(err.message);
	// 	}
	// 	setLoading(false);
	// };

	const register = (e) => {
		e.preventDefault();
		// 	if (passwordRef.current.value !== passwordConfirmRef.current.value) {
		// 		return setError("Passwords do not match");
		// 	}

		setError("");
		try {
			setError("");
			setLoading(true);
			auth.createUserWithEmailAndPassword(email, password).then((auth) => {
				db.collection("users").doc(auth.user.uid).set({
					uid: auth.user.uid,
					newUser: true,
					name: name,
					email: email,
					number: number,
				});
				if (auth) {
					history.push("/");
				}
			});
			setOpen(false);
		} catch (err) {
			setError(err.message);
		}
		setLoading(false);
	};

	return (
		<>
			<FormContainer>
				<Form>
					<Caption>
						Get started with us today! Create your account by filling out the
						information below.
					</Caption>
					<p>{error}</p>
					<FormInput>
						<Label>Name</Label>
						<Input
							type='text'
							name='name'
							placeholder='Enter your name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</FormInput>
					<FormInput>
						<Label>Email</Label>
						<Input
							type='email'
							name='email'
							placeholder='Enter your email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</FormInput>
					<FormInput>
						<Label>Phone Number</Label>
						<Input
							type='tel'
							name='phone'
							pattern='^\d{10}$'
							placeholder='Enter your phone number'
							value={number}
							onChange={(e) => setNumber(e.target.value)}
							required
						/>
					</FormInput>
					<FormInput>
						<Label>Password</Label>
						<Input
							type='password'
							name='password'
							placeholder='Enter your password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</FormInput>
					<FormInput>
						<Label>Confirm Password</Label>
						<Input
							type='password'
							name='passwordConfirm'
							placeholder='Confirm your password'
							value={passwordConfirm}
							onChange={(e) => setPasswordConfirm(e.target.value)}
							required
						/>
					</FormInput>
					<FormButton disabled={loading} onClick={register}>
						{loading ? "..." : "Register"}
					</FormButton>
				</Form>
			</FormContainer>
		</>
	);
};

export default Register;
