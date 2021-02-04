import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import { colors } from "../../color";

export const Nav = styled.nav`
	background: ${({ navbar }) =>
		navbar
			? "linear-gradient(to bottom, #c054ff 0%, #5274ff 100%);"
			: "#5274ff"};
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;

	& .MuiIcon-root {
		color: ${colors.navbarColor};
	}
	@media screen and (max-width: 960px) {
		background: ${({ navbar }) =>
			navbar
				? "linear-gradient(to bottom, #c054ff 0%, #5274ff 100%);"
				: "#5274ff"};
		box-shadow: 0 10px 15px rgba(25, 25, 25, 0.1);
	}
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;
	${Container}
`;

export const NavLogo = styled(Link)`
	color: ${colors.navbarColor};
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
`;

export const NavIcon = styled.img`
	margin-right: 0.5rem;
	height: 160px;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-25%, 25%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 80%;
		/* height: 90vh; */
		margin: 0 10%;
		position: absolute;
		top: 80px;
		left: ${({ click }) => (click ? 0 : "-100%")};
		opacity: 1;
		transition: all 0.5s ease;
		background: #c86fff;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom: 2px solid #c86fff;
	}

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLink = styled(Link)`
	color: ${colors.navbarColor};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #c86fff;
			transition: all 0.3s ease;
		}
	}
`;

export const NavButton = styled.div`
	color: ${colors.navbarColor};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #c86fff;
			transition: all 0.3s ease;
		}
	}
`;

export const BasketCount = styled.span`
	margin: auto 10px;
`;

export const Account = styled.div``;

export const User = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto 10px;
	color: #fff;
`;

export const UserName = styled.span`
	font-size: 10px;
`;

export const UserAction = styled.span`
	font-size: 13px;
	font-weight: 800;
`;
