import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, featuredCourses, faculty } from "./Data";
import { InfoSection, Services, OurPrograms, Faculty } from "../../components";

const Home = () => {
	return (
		<>
			<InfoSection {...homeObjOne} />
			<Services higher={true}/>
			<OurPrograms data={featuredCourses}/>
			<InfoSection {...homeObjTwo} />
			<Faculty data={faculty}/>
			<InfoSection {...homeObjThree} />
		</>
	);
};

export default Home;
