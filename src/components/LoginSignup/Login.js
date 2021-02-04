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
import { useStateValue } from "../../StateProvider";

const Login = ({ setOpen, data }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const [{ user }, dispatch] = useStateValue();

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		setError("");
	// 		setLoading(true);
	// 		const resp = await login(
	// 			emailRef.current.value,
	// 			passwordRef.current.value
	// 		);
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

	const signIn = (e) => {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);

			auth.signInWithEmailAndPassword(email, password).then((authUser) => {
				if (authUser) {
					history.push("/");
				}
			});

			setOpen(false);
		} catch (error) {
			setError(error.message);
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
						<Label>Email</Label>
						<Input
							type='email'
							name='email'
							placeholder='Enter your email'
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						{/* {errors.email && <p>{errors.email}</p>} */}
					</FormInput>
					<FormInput>
						<Label>Password</Label>
						<Input
							type='password'
							name='password'
							placeholder='Enter your password'
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						{/* {errors.password && <p>{errors.password}</p>} */}
					</FormInput>
					<FormButton disabled={loading} onClick={signIn}>
						Login
					</FormButton>
				</Form>
			</FormContainer>
		</>
	);
};

export default Login;
