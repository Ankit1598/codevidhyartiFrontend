import React from "react";
import {
	FacultyContainer,
	FacultyContent,
	FacultyImgContainer,
	FacultyImg,
	FacultyDesc,
	Heading,
	Description,
} from "./FacultyCard.elements";

const FacultyCard = ({ img, name, desc, link }) => {
	return (
		<>
			<FacultyContainer>
				<FacultyContent>
					<FacultyImgContainer>
						<FacultyImg src={img} />
					</FacultyImgContainer>
					<FacultyDesc>
						<Heading to={link}>{name}</Heading>
						<Description>{desc}</Description>
					</FacultyDesc>
				</FacultyContent>
			</FacultyContainer>
		</>
	);
};

export default FacultyCard;
