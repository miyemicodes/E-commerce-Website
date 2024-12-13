import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import { usdCurrencyFormatter } from "../../helpers/currencyHelper";

export function Cart() {
	const cartCtx = useContext(CartContext);
	const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
		return totalPrice + item.quantity * item.price;
	}, 0);

	const totalQuantity = cartCtx.items.reduce((totalItem, item) => {
		return totalItem + item.quantity;
	},0);

	const intPrice = usdCurrencyFormatter(cartTotal);

	return (
		<>
			<div className="w-full h-fit border-2 border-[#f6ead1] text-start px-4 py-6 lg:w-[40%]">
				<h1 className="text-black font-semibold text-xl mb-4">CART SUMMARY</h1>
				<div className="flex flex-col">
					<div className="flex items-center justify-between bg-white mb-4">
						<p className="font-semibold text-lg">Total Items : </p>
						<span className="font-bold border-2 border-[#f6ead1] p-4 text-lg">
							{totalQuantity}
						</span>
					</div>
					<div className="flex items-center justify-between bg-white mb-4">
						<p className="font-semibold text-lg">Total Amount : </p>
						<span className="font-bold border-2 border-[#f6ead1] p-4 text-lg">
							{intPrice}
						</span>
					</div>
				</div>

				<button className="w-full bg-[#967f50] font-semibold px-4 py-2 text-[#f6ead1] ">
					CHECKOUT
				</button>
			</div>
		</>
	);
}
