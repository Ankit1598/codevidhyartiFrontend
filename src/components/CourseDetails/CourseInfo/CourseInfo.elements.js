import styled from "styled-components";

export const Info = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;

	& .MuiGrid-item {
		width: 100%;
	}
`;

export const SingleCourse = styled.div``;

export const Title = styled.h3`
	font-size: 36px;
	font-weight: 400;
	color: #1f1f1f;
	margin-bottom: 30px;
`;

export const Desc = styled.p`
	font-size: 17px;
	line-height: 21px;
	margin-bottom: 0;
`;

export const SecondTitle = styled(Title)`
	margin-top: 52px;
`;

export const InfoOutline = styled.div``;

export const Sidebar = styled.div`
	position: relative;
	margin-top: ${({ mobile }) => (mobile ? "unset" : "-170px")};
`;

export const Thumb = styled.div`
	display: flex;
	justify-content: center;
	height: 250px;
	margin-bottom: 25px;
`;

export const ThumbImg = styled.img`
	height: 100%;
`;

export const Author = styled.div`
	border: 1px solid #7a43e0;
	padding: 15px 30px;
	margin-top: 20px;
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 70%;
`;

export const DisplayImg = styled.div`
	float: left;
	height: 60px;
`;

export const Img = styled.img`
	height: 100%;
	border-radius: 50%;
`;

export const NameCard = styled.div`
	position: relative;
	overflow: hidden;
	padding-left: 15px;
	top: 5px;
`;

export const Name = styled.h3`
	font-size: 18px;
	color: #1f1f1f;
	font-weight: 400;
	margin-bottom: 4px;
`;

export const SkillInfo = styled.p`
	font-size: 14px;
	margin-bottom: 0;
	color: #919191;
	overflow-wrap: break-word;
`;

export const About = styled.p`
	margin: 14px 0 20px 0;
`;

export const Socials = styled.ul``;

export const SocialItem = styled.li`
	display: inline-block;
`;

export const SocialLink = styled.a`
	color: #d1d1d1;
	margin-right: 17px;
	outline: medium none;

	& :hover {
		color: #000;
	}
`;

export const Buy = styled.a`
	width: 100%;
	text-align: center;
	cursor: pointer;
	font-size: 16px;
	color: #fff;
	padding: 17px 50px;
	margin-bottom: 25px;
	background: #ff9f67;
	border-radius: 30px;
	border: 1px solid transparent;
	display: inline-block;
	transition: 0.3s;
	text-decoration: none;
`;
