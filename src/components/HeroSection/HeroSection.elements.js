import styled from "styled-components";
import { Link } from "react-router-dom";
import hero from "../../images/hero2.png";

export const Hero = styled.div`
	height: 50%;
	margin-top: -80px;
	background-image: url(${hero});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

export const HeroContent = styled.div`
	padding-top: 218px;
`;

export const HeroHeading = styled.div`
	font-size: 60px;
	font-weight: 700;
	color: #fff;
	line-height: 1.3;
	margin-bottom: 22px;
`;

export const HeroBreadcrumb = styled.nav``;

export const Breadcrumb = styled.ol`
	padding: 0;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
	padding: 0.75rem 1rem;
	margin-bottom: 1rem;
	list-style: none;
	color: #fff;
`;

export const BreadcrumbItem = styled.li``;

export const BreadcrumbItemLink = styled(Link)`
	text-decoration: none;
	color: #fff;
`;
