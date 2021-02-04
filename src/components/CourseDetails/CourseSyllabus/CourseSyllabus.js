import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SyllabusSection, Title } from "./CourseSyllabus.elements";

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(5),
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100px",
	},
}));

const CourseSyllabus = () => {
	const classes = useStyles();

	return (
		<>
			<SyllabusSection>
				<Container>
					<Grid container spacing={5} justify='center'>
						<Grid item xs={12}>
							<Title>Syllabus</Title>
						</Grid>
						<Grid item xs={12} lg={4}>
							<Paper elevation={7} className={classes.paper}>
								<Typography variant='h4' component='div'>
									Topic 1
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={12} lg={4}>
							<Paper elevation={7} className={classes.paper}>
								<Typography variant='h4' component='div'>
									Topic 2
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={12} lg={4}>
							<Paper elevation={7} className={classes.paper}>
								<Typography variant='h4' component='div'>
									Topic 3
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={12} lg={4}>
							<Paper elevation={7} className={classes.paper}>
								<Typography variant='h4' component='div'>
									Topic 4
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={12} lg={4}>
							<Paper elevation={7} className={classes.paper}>
								<Typography variant='h4' component='div'>
									Topic 5
								</Typography>
							</Paper>
						</Grid>
					</Grid>
				</Container>
			</SyllabusSection>
		</>
	);
};

export default CourseSyllabus;
