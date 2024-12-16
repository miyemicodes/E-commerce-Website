import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import { usdCurrencyFormatter } from "../helpers/currencyHelper";
import Modal from "./Modal";
import Input from "./Input";


export default function Checkout() {
	const cartCtx = useContext(CartContext);
	const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
		return totalPrice + item.quantity * item.price;
	}, 0);

	const intPrice = usdCurrencyFormatter(cartTotal);

	return (
		<Modal>
			<form>
				<h2>Checkout</h2>
				<p>Total Amount: {intPrice}</p>

				
				<Input
					label="Full Name"
					type="text"
					id="full-name"
				/>
				<Input
					label="E-Mail Address"
					type="email"
					id="email"
				/>
				<Input
					label="Street"
					type="text"
					id="street"
				/>
				<div className="control-row">
					<Input
						label="Postal Code"
						type="text"
						id="postal-code"
					/>
					<Input
						label="City"
						type="text"
						id="city"
					/>
				</div>
			</form>
		</Modal>
	);
}
