import { createContext, useReducer } from "react";

const CartContext = createContext({
	items: [],
	addItem: (item) => {},
	removeItem: (item) => {},
});

function cartReducer(state, action) {
	if (action.type === "ADD_PRODUCT") {
		//update the state to add product

		const existingCartItemIndex = state.items.findIndex(
			() => item.id === action.item.id
		);

		const updatedItems = [...state.items];

		if (existingCartItemIndex > -1) {
			const existingItem = state.items[existingCartItemIndex];
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity + 1,
			};
		} else {
			updatedItems.push({ ...action.item, quantity: 1 });
		}
	}

	if (action.type === "REMOVE_PRODUCT") {
		//update the state to remove product
	}

	return state;
}

export function CartContextProvider({ children }) {
	useReducer(cartReducer, { items: [] });

	return <CartContextProvider>{children}</CartContextProvider>;
}

export default CartContext;
