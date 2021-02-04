import styled from "styled-components";

export const ServiceSec = styled.div`
margin-top: ${({ higher }) => (higher ? "-100px" : "0")};
	padding: ${({ higher }) => (higher ? "0" : "100px 0")};
`;

export const Service = styled.div`
	display: flex;
	box-shadow: 0px 25px 60px rgba(66, 85, 164, 0.06);
	padding: 29px 24px;
	border-radius: 20px;
	background: #fff;
`;

export const FeatureIcon = styled.div`
	position: relative;
	top: 8px;
`;

export const FeatureCaption = styled.div`
	padding-left: 19px;
`;

export const FeatureHeading = styled.h3`
	font-size: 20px;
	line-height: 1.2;
	margin-bottom: 10px;
	font-weight: 700;
`;

export const FeatureSubTitle = styled.p`
	font-size: 17px;
	line-height: 1.5;
	color: #4255a4;
	margin-bottom: 0;
`;