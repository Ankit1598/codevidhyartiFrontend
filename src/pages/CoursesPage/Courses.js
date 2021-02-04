import React from "react";
import { heroData, courses } from "./Data";
import { HeroSection, OurPrograms } from "../../components";

const Courses = () => {
	return (
		<>
			<HeroSection {...heroData} />
			<OurPrograms data={courses} />
		</>
	);
};

export default Courses;
