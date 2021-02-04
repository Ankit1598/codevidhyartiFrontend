import React from "react";
import { Container } from "../../globalStyles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	Heading,
	SubTitle,
	Feature,
	FeatureIcon,
	FeatureImg,
	FeatureDescContainer,
	FeatureDesc,
	ImgWrapper,
	Img,
} from "./InfoSection.elements";
import icon from "../../images/icons/right-icon.svg";

const InfoSection = ({
	isHero,
	bgImg,
	imgStart,
	heading,
	desc,
	hasFeature,
	features,
	hasBtn,
	btnCaption,
	btnLink,
	start,
	img,
	alt,
}) => {
	return (
		<>
			<InfoSec isHero={isHero} bgImg={bgImg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<Heading isHero={isHero}>{heading}</Heading>
								<SubTitle isHero={isHero}>{desc}</SubTitle>
								{hasFeature
									? Object.values(features).map((key, value) => {
											return (
												<Feature>
													<FeatureIcon>
														<FeatureImg src={icon} />
													</FeatureIcon>
													<FeatureDescContainer>
														<FeatureDesc>{key}</FeatureDesc>
													</FeatureDescContainer>
												</Feature>
											);
									})
									: null}
								{hasBtn ? (
									<Link to={btnLink}>
										<Button variant='contained'>{btnCaption}</Button>
									</Link>
								) : null}
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default InfoSection;
