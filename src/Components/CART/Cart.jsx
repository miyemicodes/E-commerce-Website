import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import { usdCurrencyFormatter } from "../../helpers/currencyHelper";

export function Cart() {
	const cartCtx = useContext(CartContext);
	const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
		totalPrice + item.quantity * item.price;
	}, 0);

	const intPrice = usdCurrencyFormatter(cartTotal);

	return (
		<>
			<div className="bg-[#787977] text-start">
				<h1 className="text-[#8a8b85]">CART SUMMARY</h1>
				<div className="flex items-center justify-between bg-white">
					<p className="font-semibold">Subtotal</p>
					<span className="font-bold">{intPrice}</span>
				</div>
			</div>
		</>
	);
}
