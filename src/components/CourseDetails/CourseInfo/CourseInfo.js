import React, { useState } from "react";
import {
	Container,
	Grid,
	TextField,
	Button,
} from "@material-ui/core";
import Accordion from "../../Accordion/Accordion";
import {
	Info,
	SingleCourse,
	Title,
	Desc,
	SecondTitle,
	InfoOutline,
} from "./CourseInfo.elements";
import LoginSignup from "../../LoginSignup/LoginSignup";

const defaultValues = {
	name: "",
	email: "",
	location: "",
	studyIn: "",
	query: "",
};

const CourseInfo = ({ courseData }) => {
	const [open, setOpen] = useState(false);
	const { oldPrice, name } = courseData;
	const order = {
		oldPrice,
		name,
	};

	const [formValues, setFormValues] = useState(defaultValues);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValues);
	};

	return (
		<>
			<Info>
				<Container>
					<Grid container spacing={5} justify='center'>
						<Grid item lg={7} xs={12}>
							<SingleCourse>
								<Title>Objectives</Title>
								<Desc>{courseData.objective}</Desc>
								<SecondTitle>Course Outline</SecondTitle>
							</SingleCourse>
							<InfoOutline>
								{Object.entries(courseData.outline).map((value, index) => {
									return (
											<Accordion title={value[0]} key={index}>
												{value[1]}
											</Accordion>
									);
								})}
							</InfoOutline>
						</Grid>
						<Grid item lg={5} xs={12}>
							<Title>Have Any Doubts</Title>
							<form onSubmit={handleSubmit}>
								<Grid
									container
									alignItems='center'
									justify='center'
									direction='column'
									spacing={3}
								>
									<Grid item>
										<TextField
											id='name-input'
											name='name'
											label='Name'
											type='text'
											variant='outlined'
											required
											fullWidth
											value={formValues.name}
											onChange={handleInputChange}
										/>
									</Grid>
									<Grid item>
										<TextField
											id='email-input'
											name='email'
											label='Email'
											type='email'
											variant='outlined'
											required
											fullWidth
											value={formValues.email}
											onChange={handleInputChange}
										/>
									</Grid>
									<Grid item>
										<TextField
											id='location-input'
											name='location'
											label='Location'
											type='text'
											variant='outlined'
											required
											fullWidth
											value={formValues.location}
											onChange={handleInputChange}
										/>
									</Grid>
									<Grid item>
										<TextField
											id='studyIn-input'
											name='studyIn'
											label='Currently Studying In'
											type='text'
											variant='outlined'
											required
											fullWidth
											value={formValues.studyIn}
											onChange={handleInputChange}
										/>
									</Grid>
									<Grid item>
										<TextField
											id='query-input'
											name='query'
											label='Query'
											type='text'
											variant='outlined'
											rows={7}
											required
											fullWidth
											multiline
											value={formValues.query}
											onChange={handleInputChange}
										/>
									</Grid>
									<Button variant='contained' color='primary' type='submit'>
										Submit
									</Button>
								</Grid>
							</form>
						</Grid>
					</Grid>
					{/* <Grid container spacing={2} justify='center'>
						<Grid item xl={7} lg={7}>
							<SingleCourse>
								<Title>Objectives</Title>
								<Desc>{courseData.objective}</Desc>
								<SecondTitle>Course Outline</SecondTitle>
							</SingleCourse>
							<InfoOutline>
								{Object.entries(courseData.outline).map((key) => {
									return (
										<>
											<Accordion title={key[0]}>{key[1]}</Accordion>
										</>
									);
								})}
							</InfoOutline>
						</Grid>
						<Grid item lg={5} md={8} xs={12} sm={10}>
							<Sidebar mobile={mobile}>
								{mobile ? null : (
									<Thumb>
										<ThumbImg src={courseData.thumbnail} />
									</Thumb>
								)}
								<Buy
									onClick={() => {
										currentUser
											? displayRazorpay(
													Number(oldPrice),
													name,
													currentUser.uid,
													setCurrentUser,
													db
											  )
											: handleOpen();
									}}
								>
									Enroll for Course
								</Buy>
								<Title>Faculty</Title>
								{courseData.mentors.map((mentor) => {
									const email = "mailto: " + mentor.Socials.gmail;
									return (
										<Author>
											<Header>
												<DisplayImg>
													<Img src={mentor.Img} />
												</DisplayImg>
												<NameCard>
													<Name>{mentor.Name}</Name>
													<SkillInfo>{mentor.SkillSet}</SkillInfo>
													<SkillInfo>Experience: {mentor.Exp}+ years</SkillInfo>
												</NameCard>
											</Header>
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
										</Author>
									);
								})}
							</Sidebar>
						</Grid>
					</Grid> */}
				</Container>
			</Info>

			{open ? <LoginSignup open={open} setOpen={setOpen} data={order} /> : null}
		</>
	);
};

export default CourseInfo;
