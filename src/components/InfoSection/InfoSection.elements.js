import styled from "styled-components";

export const InfoSec = styled.div`
	color: #000;
	padding: ${({ isHero }) => (isHero ? "150px 160px" : "80px 0")};
	height: ${({ isHero }) => (isHero ? "calc(100vh + 80px)" : "unset")};
	margin-top: ${({ isHero }) => (isHero ? "-80px" : 0)};
	background: ${({ isHero, bgImg }) =>
		isHero ? `url(${bgImg})` : "#fff"};
	background-size: cover;
	background-position: right;

	& > div {
		padding-left: ${({ isHero }) => (isHero ? 0 : "50px")};
	}

@media screen and (max-width: 1070px) {
background-position: center;
}

@media screen and (max-width: 670px) {
background-position: left;
}
`;

export const InfoRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	max-width: 50%;
	flex-basis: 50%;
	@media screen and (max-width: 768px) {
		max-width: 100%;
		flex-basis: 100%;
		display: flex;
		justify-content: center;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
	& a {
		text-decoration: none;
	}
	& .MuiButton-contained {
		background-color: #ff9f67;
		color: #fff;
	}
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
	}
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: ${({ isHero }) => (isHero ? "80px" : "48px")};
	line-height: 1.1;
	color: ${({ isHero }) => (isHero ? "#fff" : "#4255A4")};
	font-weight: bold;

	@media screen and (max-width: 460px) {
		font-size: ${({ isHero }) => (isHero ? "60px" : "48px")};
	}
`;

export const SubTitle = styled.p`
	max-width: 440px;
	margin-bottom: 70px;
	line-height: 24px;
	font-size: 20px;
	color: ${({ isHero }) => (isHero ? "#fff" : "null")};
`;

export const Feature = styled.div`
	display: flex;
`;

export const FeatureIcon = styled.div``;

export const FeatureImg = styled.img`
	display: block;
`;

export const FeatureDescContainer = styled.div`
	padding-left: 19px;
`;

export const FeatureDesc = styled.p`
	font-size: 15px;
	line-height: 1.8;
`;

export const ImgWrapper = styled.div`
	/* max-width: 555px; */
	display: flex;
	justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
	padding-right: 0;
	/* width: 100%; */
	border: 0;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
	@media screen and (max-width: 1440px) {
		width: 100%;
	}
`;
