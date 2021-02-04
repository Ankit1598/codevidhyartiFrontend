import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login";
import Register from "./Register";
import { AlreadyUser } from "./LoginSignup.elements";

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
		background: `#000`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const LoginSignup = ({ open, setOpen, data, login }) => {
	const classes = useStyles();
	const [modalStyle] = useState(getModalStyle);
	const [doLogin, setDoLogin] = useState(login);

	const handleClose = () => {
		setOpen(false);
	};

	const showLogin = () => {
		setDoLogin(!doLogin);
	};

	return (
		<>
			<Modal open={open} onClose={handleClose}>
				<div style={modalStyle} className={classes.paper}>
					{doLogin ? (
						<Login setOpen={setOpen} data={data} />
					) : (
						<Register setOpen={setOpen} data={data} />
					)}
					<AlreadyUser>
						Already have an account? {doLogin ? "Register" : "Login"}{" "}
						<span onClick={showLogin}>here</span>
					</AlreadyUser>
				</div>
			</Modal>
		</>
	);
};

export default LoginSignup;
