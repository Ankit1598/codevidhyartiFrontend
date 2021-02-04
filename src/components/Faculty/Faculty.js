import React from "react";
import { Container, Grid } from "@material-ui/core";
import { FacultySection, Heading } from "./Faculty.elements";
import FacultyCard from "../FacultyCard/FacultyCard";

const Faculty = (data) => {
	return (
		<>
			<FacultySection>
				<Container>
					<Heading>Our Faculty</Heading>

					<Grid container justify='center'>
						{Object.entries(data).map((key, value) => {
							return key[1].map((key) => {
								return (
									<Grid item lg={3}>
										<FacultyCard
											img={key.img}
											name={key.name}
											desc={key.desc}
											link={key.link}
										/>
									</Grid>
								);
							});
						})}
					</Grid>
				</Container>
			</FacultySection>
		</>
	);
};

export default Faculty;
