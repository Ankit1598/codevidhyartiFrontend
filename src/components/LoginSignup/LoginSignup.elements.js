import styled from "styled-components";

export const AlreadyUser = styled.p`
	font-size: 0.8rem;
	margin-top: 10px;
	color: #fff;
	width: 80%;
	text-align: center;

	& span {
		text-decoration: none;
		color: #27cdff;
		font-weight: 600;
	}
`;

export const FormContainer = styled.div``;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& p {
		text-align: center;
		color: red;
	}
`;

export const Caption = styled.h1`
	font-size: 1rem;
	text-align: start;
	width: 80%;
	margin-bottom: 1rem;
	color: #fff;
`;

export const FormInput = styled.div`
	margin-bottom: 0.5rem;
	width: 80%;

	& p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;

export const Label = styled.label`
	display: inline-block;
	font-size: 0.8rem;
	margin-bottom: 6px;
	color: #fff;
`;

export const Input = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;

	& ::placeholder {
		color: #595959;
		font-size: 12px;
	}
`;

export const FormButton = styled.button`
	width: 80%;
	height: 50px;
	margin-top: 10px;
	border-radius: 2px;
	background: linear-gradient(
		90deg,
		rgb(39, 176, 255) 0%,
		rgb(0, 232, 236) 100%
	);
	outline: none;
	border: none;
	color: #fff;
	font-size: 1rem;

	& :hover {
		cursor: pointer;
		background: linear-gradient(
			90deg,
			rgb(39, 143, 255) 0%,
			rgb(12, 99, 250) 100%
		);
		transition: all 0.4s ease-out;
	}
`;
