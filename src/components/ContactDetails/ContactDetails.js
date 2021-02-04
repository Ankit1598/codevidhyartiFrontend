import React from "react";
import { Container, Grid } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import GoogleMapReact from "google-map-react";
import {
	Contact,
	MapContainer,
	ContactInfo,
	IconContainer,
	InfoBody,
	Head,
	Sub,
} from "./ContactDetails.elements";

const ContactDetails = () => {
	const settings = {
		center: {
			lat: 59.95,
			lng: 30.33,
		},
		zoom: 11,
	};
	return (
		<>
			<Contact>
				<Container>
					<Grid container spacing={2} alignItems='center'>
						<Grid item xs={12} md={9} lg={9}>
							<MapContainer>
								<GoogleMapReact
									bootstrapURLKeys={{
										key: "AIzaSyCmSSQA9bd7r9TtR1nAMZ_m - haWQK2LA0M",
									}}
									defaultCenter={settings.center}
									defaultZoom={settings.zoom}
								></GoogleMapReact>
							</MapContainer>
						</Grid>
						<Grid item xs={12} md={3} lg={3}>
							<ContactInfo>
								<IconContainer>
									<HomeIcon />
								</IconContainer>
								<InfoBody>
									<Head>Faari Road, Barakar</Head>
									<Sub>Chennai 713324</Sub>
								</InfoBody>
							</ContactInfo>
							<ContactInfo>
								<IconContainer>
									<PhoneAndroidIcon />
								</IconContainer>
								<InfoBody>
									<Head>+91 9832121569</Head>
									<Sub>Mon to Fri 9am to 6pm</Sub>
								</InfoBody>
							</ContactInfo>
							<ContactInfo>
								<IconContainer>
									<EmailIcon />
								</IconContainer>
								<InfoBody>
									<Head>codevidhyarti@gmail.com</Head>
									<Sub>Send us your query anytime!</Sub>
								</InfoBody>
							</ContactInfo>
						</Grid>
					</Grid>
				</Container>
			</Contact>
		</>
	);
};

export default ContactDetails;
