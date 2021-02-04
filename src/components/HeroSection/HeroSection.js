import React from "react";
import { Container } from "@material-ui/core";
import {
	Hero,
	HeroContent,
	HeroHeading,
	HeroBreadcrumb,
	Breadcrumb,
	BreadcrumbItem,BreadcrumbItemLink
} from "./HeroSection.elements";

const HeroSection = ({ title, breadcrumb }) => {
	return (
		<>
			<Hero>
				<Container>
					<HeroContent>
						<HeroHeading>{title}</HeroHeading>
						<HeroBreadcrumb>
							<Breadcrumb>
								<BreadcrumbItem>
									<BreadcrumbItemLink to='/'>Home</BreadcrumbItemLink> |</BreadcrumbItem>
								<BreadcrumbItem>| {breadcrumb}</BreadcrumbItem>
							</Breadcrumb>
						</HeroBreadcrumb>
					</HeroContent>
				</Container>
			</Hero>
		</>
	);
};

export default HeroSection;
