import styled from "styled-components";
import { Link } from "react-router-dom";
import bg from "../../images/footer.png";

export const Foot = styled.div`
	background-image: url(${bg});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const FooterContent = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
`;

export const Widget = styled.div``;

export const Logo = styled.div`
	font-size: 22px;
	font-weight: 400;
	margin-bottom: 15px;
	color: #fff;
	text-transform: capitalize;
`;

export const LogoLink = styled(Link)`
	color: #fff;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
`;

export const Img = styled.img`
	height: 200px;
`;

export const Subline = styled.p`
	color: #c7c7c7;
`;

export const SocialLinks = styled.div`
	margin-top: 50px;
	text-align: center;
`;

export const SocialList = styled.ul``;

export const SocialListItem = styled.li`
	display: inline-block;
`;

export const SocialLink = styled(Link)`
	font-size: 16px;
	color: #bababa;
	width: 50px;
	height: 50px;
	display: flex;
	text-align: center;
	background: #8565e2;
	border-radius: 3px;
	line-height: 50px !important;
	margin-right: 7px;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h3`
	font-size: 22px;
	font-weight: 400;
	color: #fff;
	text-transform: capitalize;
	margin-bottom: 40px;
`;

export const List = styled.ul``;

export const Item = styled.li``;

export const ItemLink = styled(Link)`
	font-size: 16px;
	color: #bababa;
	line-height: 42px;
`;

export const Address = styled.p`
	color: #c7c7c7;
`;

export const CopyRight = styled.div`
	padding-bottom: 30px;
`;

export const Border = styled.div`
	border-top: 1px solid rgba(255, 255, 255, 0.2);
	padding-bottom: 30px;
`;

export const CRText = styled.p`
	font-size: 16px;
	color: #919191;
	margin-bottom: 0;
	font-weight: 400;
	text-align: center !important;

	& .MuiSvgIcon-root {
		fill: red;
	}
`;
