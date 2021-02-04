import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "./Data";
import {
	CourseHero,
	CourseInfo,
	CourseInstructors,CourseSyllabus,
	CourseSpeciality,
} from "../../components";

const CourseDetails = () => {
	const { slug } = useParams();
	const courseInfo = find(slug);

	return (
		<>
			<CourseHero courseData={courseInfo} />
			<CourseInfo courseData={courseInfo} />
			<CourseInstructors courseData={courseInfo} />
			<CourseSyllabus />
		</>
	);
};

const find = (slug) => {
	return courses.find((course) => course.slug.toLowerCase() === slug).details;
};

export default CourseDetails;
