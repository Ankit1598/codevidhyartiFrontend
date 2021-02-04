import React from "react";
import { Container, Grid } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
	Foot,
	FooterContent,
	Widget,
	Logo,
	LogoLink,
	Img,
	Subline,
	SocialLinks,
	SocialList,
	SocialListItem,
	SocialLink,
	Title,
	List,
	Item,
	ItemLink,
	Address,
	CopyRight,
	Border,
	CRText,
} from "./Footer.elements";
import footer_logo from '../../images/footer_logo.png'

function Footer() {
	const year = new Date().getFullYear();
	return (
		<>
			<Foot>
				<FooterContent>
					<Container>
						<Grid container justify='space-between'>
							<Grid item lg={4} md={4} sm={6}>
								<Widget>
									<Logo>
										<LogoLink to='/'>
											<Img src={footer_logo} />
										</LogoLink>
									</Logo>
									<Subline>
										Firmament morning sixth subdue darkness creeping gathered
										divide our let god moving. Moving in fourth air night bring
										upon it beast let you dominion likeness open place day
										great.
									</Subline>
									<SocialLinks>
										<SocialList>
											<SocialListItem>
												<SocialLink to='/'>
													<LinkedInIcon />
												</SocialLink>
											</SocialListItem>
											<SocialListItem>
												<SocialLink to='/'>
													<FacebookIcon />
												</SocialLink>
											</SocialListItem>
											<SocialListItem>
												<SocialLink to='/'>
													<InstagramIcon />
												</SocialLink>
											</SocialListItem>
											<SocialListItem>
												<SocialLink to='/'>
													<GitHubIcon />
												</SocialLink>
											</SocialListItem>
										</SocialList>
									</SocialLinks>
								</Widget>
							</Grid>
							<Grid item lg={3} md={3} sm={6} style={{ textAlign: "center", marginTop: '100px'}}>
								<Widget>
									<Title>Courses</Title>
									<List>
										<Item>
											<ItemLink to='/course/python'>Python</ItemLink>
										</Item>
										<Item>
											<ItemLink to='/course/c_c++'>C / C++</ItemLink>
										</Item>
										<Item>
											<ItemLink to='/course/webdev'>Web Development</ItemLink>
										</Item>
										<Item>
											<ItemLink to='/course/share-market'>Share Market</ItemLink>
										</Item>
										<Item>
											<ItemLink to='/course/personality-development'>Personality Development</ItemLink>
										</Item>
									</List>
								</Widget>
							</Grid>
							<Grid item lg={3} md={3} sm={6} style={{ marginTop: '100px'}}>
								<Widget>
									<Title>Address</Title>
									<Address>
										Faari Road, Barakar, 713324 <br /> +91 9832121569 <br />{" "}
										codevidhyarti@gmail.com
									</Address>
								</Widget>
							</Grid>
						</Grid>
					</Container>
				</FooterContent>
				<CopyRight>
					<Container>
						<Border />
						<Grid container>
							<Grid item sm={12}>
								<CRText>
									Copyright © {year} All rights reserved | This website is made
									with <FavoriteIcon /> CodeVidhyarti Team
								</CRText>
							</Grid>
						</Grid>
					</Container>
				</CopyRight>
			</Foot>
		</>
	);
}

export default Footer;
