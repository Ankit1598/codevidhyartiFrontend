import styled from "styled-components";

export const CartSection = styled.div`
	margin: 50px 0;

	& .MuiTypography-h1 {
		font-size: 48px;
	}
`;

export const CartItemLeft = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	text-align: center;

	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;

export const CartItemRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

export const CartItemImg = styled.img`
	width: 150px;
	margin: 20px;
`;
