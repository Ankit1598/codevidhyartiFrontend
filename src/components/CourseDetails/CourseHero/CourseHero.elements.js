import styled from "styled-components";
import bg from "../../../images/heroCourse.png";

export const Hero = styled.div`
	background-image: linear-gradient(
		to bottom right,
		#705b5b 0%,
		#3685be 100%
	); //url(${bg});
	padding: 45px 0;
	margin: 10px;
	/* background-size: cover; */
	/* background-repeat: no-repeat; */
	/* background-position: center; */
	border-radius: 30px;
	color: #fff;
`;

export const TextWrapper = styled.div`
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;

	/* @media screen and (min-width: 1200px) {
		flex: 0 0 50%;
		max-width: 50%;
	} */
`;

export const Title = styled.div`
	font-size: 46px;
	color: #fff;
	font-weight: 400;
`;

export const SubTitle = styled.div`
	font-size: 20px;
	color: #fff;
	font-weight: 400;
`;

export const Price = styled.div`
	padding: 25px 0;
	& span {
		font-size: 30px;
		font-weight: 400;
	}

	@media screen and (max-width: 760px) {
		flex-direction: column;
		padding: 0 0 25px;
	}
`;

export const OldPrice = styled.span`
	color: #fff;
	text-decoration: line-through;
	margin-right: 25px;
`;

export const NewPrice = styled.span`
	color: #ff9f67;
`;

// export const Disclaimer = styled.p`
// 	color: #000;
// 	font-weight: bold;
// `;

export const Instructors = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-top: 15px;
`;

export const InstructorLeft = styled.div`
	display: flex;
`;

// export const InstructorImg = styled.img`
// 	height: 60px;
// 	border-radius: 50%;
// `;

export const InstructorRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	flex: 1;
	padding-left: 25px;
`;

export const Name = styled.div``;

export const Role = styled.div``;

export const AdditionalCourses = styled.div`
	padding: 0 175px 0 75px;

	@media screen and (max-width: 760px) {
		padding: 0 25px;
	}

	& .MuiFormGroup-row {
		justify-content: space-between;

		& .MuiFormControlLabel-root {
			height: 50px;
			background: gray;
			margin: 10px 0;
			border-radius: 30px;
			box-shadow: 0 5px 10px 0px #5274ff;

			& .MuiTypography-body1 {
				padding: 15px;
				padding-right: 30px;
			}
		}
	}
`;

// export const Course = styled.div`
// 	display: flex;
// 	justify-content: space-around;
// 	align-items: center;
// `;

// export const CourseName = styled.div`
// 	padding-left: 15px;
// `;

export const ImgWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const CourseImg = styled.img`
	padding-right: 0;
	border: 0;
	vertical-align: middle;
	display: inline-block;
	height: ${({ top }) => (top ? "150px" : "150px")};
`;

export const CourseReg = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding: 25px 0 0;

	@media screen and (max-width: 760px) {
		flex-direction: column;
		padding: 0;
	}
`;
