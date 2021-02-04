import styled from "styled-components";

export const Speciality = styled.div`
	padding-top: 50px;
	padding-bottom: 170px;
`;

export const Header = styled.div`
	margin-bottom: 100px;
	text-align: center !important;
`;

export const Title = styled.h3`
	font-size: 46px;
	font-weight: 400;
	line-height: 52px;
	margin-bottom: 23px;
	color: #1f1f1f;
`;

export const SubTitle = styled.p`
	font-size: 17px;
	font-family: "Crimson Text", serif;
	font-weight: 400;
	line-height: 28px;
	color: #727272;
	margin-bottom: 0;
`;

export const Special = styled.div`
	border: 1px solid #e8e8e8;
	padding: 38px 30px;
	position: relative;
	margin: 0 15px 30px;
	text-align: center !important;
	z-index: 0;

	&:hover {
		background-color: #fd8e5e;

		& h3,
		p {
			color: #fff;
		}
	}
`;

export const IconContainer = styled.div``;

export const Icon = styled.img`
	color: #fd8e5e;
	font-size: 45px;
	transition: 0.3s;
	height: 50px;
	width: 50px;
`;

export const Topic = styled.h3`
	font-size: 18px;
	font-weight: 400;
	color: #1f1f1f;
	margin-bottom: 22px;
	margin-top: 7px;
	transition: 0.3s;
`;

export const Desc = styled.p`
	font-size: 17px;
	color: #727272;
	transition: 0.3s;
`;
