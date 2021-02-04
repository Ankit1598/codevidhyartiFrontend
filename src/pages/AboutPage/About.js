import React from "react";
import { heroData, homeObjTwo, homeObjThree, faculty } from "./Data";
import { HeroSection, Services, InfoSection, Faculty } from "../../components";

const About = () => {
	return (
		<>
			<HeroSection {...heroData} />
			<Services />
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjThree} />
			<Faculty data={faculty}/>
		</>
	);
};

export default About;
