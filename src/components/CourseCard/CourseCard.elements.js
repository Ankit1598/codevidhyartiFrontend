import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
	margin: 50px 15px 0;
	max-width: 370px;
	min-width: 330px;
`;

export const CardContent = styled.div`
	box-shadow: 0px 6px 6px 0px rgba(2, 25, 65, 0.08);
	border-radius: 10px;
	transition: 0.4s;
`;

export const CardImgContainer = styled.div`
	height: 185px;
	display: flex;
	justify-content: center;
`;

export const CardImg = styled.img`
	height: 100%;
	max-width: 100%;
	border-radius: 10px 10px 0 0;
	position: relative;
`;

export const CardDesc = styled.div`
	padding: 29px 20px 20px 20px;
`;

export const TopLine = styled.p`
	color: #6e7697;
`;

export const Heading = styled(Link)`
	font-size: 20px;
	font-weight: bold;
	color: #4255a4;
	margin-bottom: 6px;
	font-family: sans-serif;
`;

export const Description = styled.p`
	color: #6e7697;
`;

export const Price = styled.div`
	margin-bottom: 22px;
	display: flex;
	flex-direction: column;
	& span {
		cursor: pointer;
		font-weight: 700;
		color: #4255a4;
		font-size: 23px;

		& s {
			font-size: 16px;
			color: #808080;
			padding-left: 10px;
		}
	}
`;
export const Links = styled.div`
	display: flex;
	justify-content: center;
`;

export const CourseLink = styled(Link)`
	text-align: center;
	border: 1px solid #e2e4ff;
	background-color: #ff9f67;
	color: #fff;
	border-radius: 5px;
	text-transform: capitalize;
	padding: 15px;
	cursor: pointer;
	display: inline-block;
	font-size: 16px;
	font-weight: 500;
	letter-spacing: 1px;
	text-decoration: none;
	margin: 0 10px;
`;
