import React, { useState } from "react";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLink,
	NavButton,
	BasketCount,
} from "./Navbar.elements";
import { IconButton } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LoginSignup from "../LoginSignup/LoginSignup";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [navbar, setNavbar] = useState(false);
	const [open, setOpen] = useState(false);
	const [{ basket, user }] = useStateValue();
	const history = useHistory();

	const handleSignOut = () => {
		if (user) {
			auth.signOut().then(history.push("/"));
		}
	};

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClick = () => setClick(!click);

	const changeBG = () => {
		if (window.scrollY > 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeBG);
	return (
		<>
			<Nav navbar={navbar}>
				<NavbarContainer>
					<NavLogo to='/'>
						<NavIcon />
						CodeVidhyarti
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						<IconButton>
							{click ? (
								<CloseIcon fontSize='large' />
							) : (
								<MenuIcon fontSize='large' />
							)}
						</IconButton>
					</MobileIcon>
					<NavMenu onClick={handleClick} click={click}>
						<NavItem>
							<NavLink to='/'>Home</NavLink>
						</NavItem>
						{/* <NavItem>
							<NavLink to='/about'>About Us</NavLink>
						</NavItem> */}
						<NavItem>
							<NavLink to='/courses'>Programs</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/contact'>Contact Us</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/cart'>
								<ShoppingCartIcon />
								<BasketCount>{basket?.length}</BasketCount>
							</NavLink>
						</NavItem>
						<NavItem>
							{user ? (
								<NavLink to='' onClick={handleSignOut}>
									{user.name}
								</NavLink>
							) : (
								<NavButton>
									<Button variant='contained' onClick={handleOpen}>
										Login
									</Button>
								</NavButton>
							)}
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
			{open ? <LoginSignup open={open} setOpen={setOpen} login /> : null}
		</>
	);
};

export default Navbar;
