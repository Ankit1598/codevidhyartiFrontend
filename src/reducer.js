import { db } from "./firebase";

export const initialState = {
	basket: [],
	user: null,
};

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => Number(item.price) + amount, 0);

const reducer = (state, action) => {
	console.log(state, action)
	switch (action.type) {
		case "ADD_TO_BASKET": {
			let orders = [...state.basket, action.item];
			db.collection("orders").doc(state.user.uid).set({
				userName: state.user.name,
				orders: orders,
				count: orders.length,
			});
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		}

		case "EMPTY_BASKET": {
			let orders = [];
			db.collection("orders").doc(state.user.uid).set({
				userName: state.user.name,
				orders: orders,
				count: orders.length,
			});
			return {
				...state,
				basket: orders,
			};
		}

		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let newBasket = [...state.basket];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as its not in basket!`
				);
			}

			db.collection("orders").doc(state.user.uid).set({
				userName: state.user.name,
				orders: newBasket,
				count: newBasket.length,
			});

			return {
				...state,
				basket: newBasket,
			};

		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		case "SET_BASKET":
			return {
				...state,
				basket: action.basket,
			};

		default:
			return state;
	}
};

export default reducer;
