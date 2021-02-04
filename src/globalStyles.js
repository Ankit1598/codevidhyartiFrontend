import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	a{
		text-decoration: none;
font-family: 'Noticia Text', serif;
	}

	p {
		color: #10285d;
		font-size: 16px;
		line-height: 30px;
		margin-bottom: 15px;
		font-weight: normal;
    font-family: 'Lato';
	}
	h1, h2, h3, h4, h5 {
		color: #4255A4;
		margin-top: 0px;
		font-style: normal;
		font-weight: 400;
	font-family: 'Fira Sans Extra Condensed', sans-serif;
	}
	ul, ol, li {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	/*
font-family: 'Josefin Slab', serif;
font-family: 'Noticia Text', serif;
*/

`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export default GlobalStyles;
