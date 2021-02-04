import React, { useState } from "react";
import {
	CardContainer,
	CardContent,
	CardImgContainer,
	CardImg,
	CardDesc,
	TopLine,
	Heading,
	Description,
	Price,
	Links,
	CourseLink,
} from "./CourseCard.elements";
import LoginSignup from "../LoginSignup/LoginSignup";
import { useStateValue } from "../../StateProvider";

const CourseCard = ({
	id,
	img,
	topLine,
	heading,
	desc,
	oldPrice,
	newPrice,
	isFree,
	slug,
}) => {
	const [{ user }, dispatch] = useStateValue();
	const [open, setOpen] = useState(false);

	const order = {
		id: id,
		title: heading,
		img: img,
		price: newPrice,
	};
	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: order,
		});
	};
	return (
		<>
			<CardContainer id={id}>
				<CardContent>
					<CardImgContainer>
						<CardImg src={img} />
					</CardImgContainer>
					<CardDesc>
						<TopLine>{topLine}</TopLine>
						<Heading to={slug}>{heading}</Heading>
						<Description>{desc}</Description>
						<Price>
							<span>
								{isFree ? "Free" : `? ${newPrice}`}
								<s>? {oldPrice}</s>
							</span>
							<small>*? 250 - Registration Fees(One time only)</small>
						</Price>
						<Links>
							<CourseLink to={slug}>Find Out More</CourseLink>
							<CourseLink
								onClick={() => {
									user ? addToBasket() : setOpen(true);
								}}
							>
								Register Now
							</CourseLink>
						</Links>
					</CardDesc>
				</CardContent>
			</CardContainer>
			{open ? (
				<LoginSignup open={open} setOpen={setOpen} data={order} login />
			) : null}
		</>
	);
};

export default CourseCard;
