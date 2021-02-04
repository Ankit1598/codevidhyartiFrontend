import styled from "styled-components";

export const InstuctorSection = styled.div`
	color: #000;
	padding-bottom: 60px;
`;

export const InstructorRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ start }) => (start ? "row-reverse" : "row")};
	margin-bottom: 25px;
`;

export const InstructorColumn = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		max-width: 100%;
		flex-basis: 100%;
		display: flex;
		justify-content: center;
		padding: 0;
	}
`;

export const Title = styled.h3`
	font-size: 46px;
	color: #000;
	font-weight: 400;
	text-align: center;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;

	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
	}
`;

export const Div = styled.div`
	font-size: 20px;
	color: #000;
	font-weight: 400;
	text-align: center;
`;

export const Socials = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const SocialItem = styled.li`
	display: inline-block;
`;

export const SocialLink = styled.a`
	color: gray;
	outline: medium none;

	& :hover {
		color: #000;
	}
`;
