import React from "react";
import { Container, Grid } from "@material-ui/core";
import {
	ServiceSec,
	Service,
	FeatureIcon,
	FeatureCaption,FeatureHeading, FeatureSubTitle
} from "./Services.elements";
import icon1 from '../../images/serviceIcon/icon1.svg'
import icon2 from '../../images/serviceIcon/icon2.svg'
import icon3 from '../../images/serviceIcon/icon3.svg'

const Services = ({higher}) => {
	return (
		<>
			<ServiceSec higher={higher}>
				<Container>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={4}>
							<Service>
								<FeatureIcon>
									<img src={icon1} alt='Icon' />
								</FeatureIcon>
								<FeatureCaption>
									<FeatureHeading>Live Classes</FeatureHeading>
									<FeatureSubTitle>Live Classes for all stages, with Equal theory and implementation </FeatureSubTitle>
								</FeatureCaption>
							</Service>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Service>
								<FeatureIcon>
									<img src={icon2} alt='Icon' />
								</FeatureIcon>
								<FeatureCaption>
									<FeatureHeading>Expert Instructors</FeatureHeading>
									<FeatureSubTitle>Get ready for a career in the high-demand fields </FeatureSubTitle>
								</FeatureCaption>
							</Service>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Service>
								<FeatureIcon>
									<img src={icon3} alt='Icon' />
								</FeatureIcon>
								<FeatureCaption>
									<FeatureHeading>Ream Time Project Experience</FeatureHeading>
									<FeatureSubTitle>Build a deep, solid understanding in various domains.</FeatureSubTitle>
								</FeatureCaption>
							</Service>
						</Grid>
					</Grid>
				</Container>
			</ServiceSec>
		</>
	);
};

export default Services;
