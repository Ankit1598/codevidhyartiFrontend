import styled from "styled-components";
import { Link } from "react-router-dom";

export const FacultyContainer = styled.div`
	margin: 50px 15px 0;
	width: 263px;
`;

export const FacultyContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	box-shadow: 0px 6px 6px 0px rgba(2, 25, 65, 0.08);
	border-radius: 10px;
	transition: 0.4s;
`;

export const FacultyImgContainer = styled.div``;

export const FacultyImg = styled.img`
	margin: 0 auto;
	margin-bottom: 30px;
	height: 120px;
	border-radius: 50%;
	width: 120px;
	border: 5px solid red;
`;

export const FacultyDesc = styled.div``;

export const Heading = styled(Link)`
	font-size: 20px;
	font-weight: 500;
	margin-bottom: 6px;
	text-decoration: none;
`;

export const Description = styled.p`
	color: #57667e;
	font-size: 16px;
	transition: 0.2s;
	margin: 0;
`;
