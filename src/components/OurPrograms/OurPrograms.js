import React from "react";
import { Container, Grid } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FCSection, Heading } from "./OurPrograms.elements";
import CourseCard from "../CourseCard/CourseCard";

const FeaturedCourses = (data) => {
	var settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 5000,
	};
	return (
		<>
			<FCSection>
				<Container>
					<Heading>Our Programs</Heading>
					<Grid container justify='center'>
						{Object.entries(data).map((key, value) => {
							return key[1].map((key) => {
								return (
									<Grid item lg={4} md={6} sm={12}>
										<CourseCard
											id={key.id}
											img={key.img}
											topLine={key.topLine}
											heading={key.name}
											desc={key.desc}
											oldPrice={key.oldPrice}
											newPrice={key.newPrice}
											isFree={key.isFree}
											slug={key.slug}
										/>
									</Grid>
								);
							});
						})}
					</Grid>
				</Container>
			</FCSection>
		</>
	);
};

export default FeaturedCourses;
