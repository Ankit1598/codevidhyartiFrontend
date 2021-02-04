import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import {
	Container,
	Grid,
	Button,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Avatar,
} from "@material-ui/core";
import {
	Hero,
	Title,
	SubTitle,
	Instructors,
	InstructorLeft,
	InstructorRight,
	Name,
	Role,
	AdditionalCourses,
	ImgWrapper,
	CourseImg,
	CourseReg,
	Price,
	OldPrice,
	NewPrice,
} from "./CourseHero.elements";

const Select = withStyles({
	root: {
		color: green[400],
		"&$checked": {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Checkbox color='default' {...props} />);

const useStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

const CourseHero = ({ courseData }) => {
	const classes = useStyles();
	const [state, setState] = useState({
		checkedA: false,
		checkedB: false,
		checkedC: false,
	});
	const [mobile, setMobile] = useState(false);

	const updateSize = () => {
		if (window.innerWidth < 600) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};

	window.addEventListener("resize", updateSize);

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<>
			<Hero>
				<Container maxWidth='lg'>
					<Grid container spacing={5}>
						<Grid item lg={7} md={7} sm={6} xs={12}>
							<Grid container direction='column' spacing={4}>
								{mobile ? (
									<Grid item xs>
										<ImgWrapper>
											<CourseImg src={courseData.thumbnail} />
										</ImgWrapper>
									</Grid>
								) : null}
								<Grid item xs>
									<Title>{courseData.name}</Title>
									<SubTitle>{courseData.name}</SubTitle>
								</Grid>
								<Grid item xs>
									{courseData.mentors.map((mentor) => {
										let ini = "";
										mentor.Name.split(" ")
											.slice(1)
											.forEach((name) => (ini += name[0]));
										return (
											<Instructors key={ini}>
												<InstructorLeft>
													<Avatar
														alt={mentor.Name}
														src={mentor.Img}
														className={classes.large}
													>
														{ini}
													</Avatar>
												</InstructorLeft>
												<InstructorRight>
													<Name>{mentor.Name}</Name>
													<Role>{mentor.SkillSet}</Role>
													{/* <Role>{mentor.Exp}+ Years</Role> */}
												</InstructorRight>
											</Instructors>
										);
									})}
								</Grid>
								<Grid item xs>
									<AdditionalCourses>
										<FormGroup row>
											<FormControlLabel
												control={
													<Select
														checked={state.checkedA}
														onChange={handleChange}
														name='checkedA'
													/>
												}
												label='A'
											/>
											<FormControlLabel
												control={
													<Select
														checked={state.checkedB}
														onChange={handleChange}
														name='checkedB'
													/>
												}
												label='B'
											/>
											<FormControlLabel
												control={
													<Select
														checked={state.checkedC}
														onChange={handleChange}
														name='checkedC'
													/>
												}
												label='C'
											/>
										</FormGroup>
									</AdditionalCourses>
								</Grid>
							</Grid>
						</Grid>
						<Grid item lg={5} md={5} sm={6} xs={12}>
							<Grid container>
								{mobile ? null : (
									<Grid item xs={12}>
										<ImgWrapper>
											<CourseImg src={courseData.thumbnail} />
										</ImgWrapper>
									</Grid>
								)}
								<Grid item xs={12}>
									<CourseReg>
										<Price>
											<OldPrice>₹ {courseData.oldPrice}</OldPrice>
											<NewPrice>
												{courseData.isFree
													? "Free"
													: `₹ ${courseData.newPrice}`}
											</NewPrice>
										</Price>
										<Button variant='contained'>Register Now</Button>
									</CourseReg>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Hero>
		</>
	);
};

export default CourseHero;
