import React from "react";
import { Container, Grid } from "@material-ui/core";
import diamond from "../../../images/icons/diamond.svg";
import money from "../../../images/icons/money.svg";
import crown from "../../../images/icons/crown.svg";
import gem from "../../../images/icons/gem.svg";
import {
	Speciality,
	Header,
	Title,
	SubTitle,
	Special,
	IconContainer,
	Icon,
	Topic,
	Desc,
} from "./CourseSpeciality.elements";
const CourseSpeciality = () => {
	return (
		<>
			<Speciality>
				<Container>
					<Grid container>
						<Grid item xs={12}>
							<Header>
								<Title>Our Course Speciality</Title>
								<SubTitle>
									Your domain control panel is designed for ease-of-use and{" "}
									<br /> allows for all aspects of your domains.
								</SubTitle>
							</Header>
						</Grid>
						<Grid item xl={3} md={6} lg={3}>
							<Special>
								<IconContainer>
									<Icon src={diamond} />
								</IconContainer>
								<Topic>Premium Quality</Topic>
								<Desc>
									Ipsum esse molestiae iusto voluptatum dicta laboriosam iste
									inventore voluptatibus sit facilis deleniti adipisci eligendi
									quis, provident voluptas praesentium hic debitis
								</Desc>
							</Special>
						</Grid>
						<Grid item xl={3} md={6} lg={3}>
							<Special>
								<IconContainer>
									<Icon src={money} />
								</IconContainer>
								<Topic>Premium Quality</Topic>
								<Desc>
									Ipsum esse molestiae iusto voluptatum dicta laboriosam iste
									inventore voluptatibus sit facilis deleniti adipisci eligendi
									quis, provident voluptas praesentium hic debitis
								</Desc>
							</Special>
						</Grid>
						<Grid item xl={3} md={6} lg={3}>
							<Special>
								<IconContainer>
									<Icon src={crown} />
								</IconContainer>
								<Topic>Premium Quality</Topic>
								<Desc>
									Ipsum esse molestiae iusto voluptatum dicta laboriosam iste
									inventore voluptatibus sit facilis deleniti adipisci eligendi
									quis, provident voluptas praesentium hic debitis
								</Desc>
							</Special>
						</Grid>
						<Grid item xl={3} md={6} lg={3}>
							<Special>
								<IconContainer>
									<Icon src={gem} />
								</IconContainer>
								<Topic>Premium Quality</Topic>
								<Desc>
									Ipsum esse molestiae iusto voluptatum dicta laboriosam iste
									inventore voluptatibus sit facilis deleniti adipisci eligendi
									quis, provident voluptas praesentium hic debitis
								</Desc>
							</Special>
						</Grid>
					</Grid>
				</Container>
			</Speciality>
		</>
	);
};

export default CourseSpeciality;
