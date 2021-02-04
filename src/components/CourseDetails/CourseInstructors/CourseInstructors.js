import React from "react";
import { Container, Grid } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {
	InstuctorSection,
	InstructorRow,
	InstructorColumn,
	Title,
	Div,
	Socials,
	SocialItem,
	SocialLink,
} from "./CourseInstructors.elements";

const CourseInstructors = ({ courseData }) => {
	let start = false;
	return (
		<>
			<InstuctorSection>
				<Container>
					<Grid container justify='center' spacing={7}>
						<Grid item xs={12}>
							<Title>Meet Your Instructors</Title>
						</Grid>
						<Grid item xs={12}>
							{courseData.mentors.map((mentor, index) => {
								start = false;
								if (index % 2 === 0) {
									start = true;
								}
								console.log(index);
								const email = "mailto: " + mentor.Socials.gmail;
								return (
									<InstructorRow start={start} key={index}>
										<InstructorColumn>
											<iframe
												title='This is a unique title'
												width='560'
												height='315'
												src='https://www.youtube.com/embed/r_MpUP6aKiQ'
												frameBorder='0'
												allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
												allowFullScreen
											></iframe>
										</InstructorColumn>
										<InstructorColumn>
											<Grid
												container
												spacing={3}
												direction='column'
												alignContent='center'
											>
												<Grid item>
													<Div>{mentor.Name}</Div>
												</Grid>
												<Grid item>
													<Div>{mentor.SkillSet}</Div>
												</Grid>
												<Grid item>
													<Div>{mentor.SkillSet}</Div>
												</Grid>
												<Grid item>
													<Div>{mentor.Exp}</Div>
												</Grid>
												<Grid item>
													<Socials>
														<SocialItem>
															<SocialLink href={email}>
																<EmailIcon />
															</SocialLink>
														</SocialItem>
														<SocialItem>
															<SocialLink href={mentor.Socials.github}>
																<GitHubIcon />
															</SocialLink>
														</SocialItem>
														<SocialItem>
															<SocialLink href={mentor.Socials.linkedin}>
																<LinkedInIcon />
															</SocialLink>
														</SocialItem>
													</Socials>
												</Grid>
											</Grid>
										</InstructorColumn>
									</InstructorRow>
								);
							})}
						</Grid>
					</Grid>
				</Container>
			</InstuctorSection>
		</>
	);
};

export default CourseInstructors;
