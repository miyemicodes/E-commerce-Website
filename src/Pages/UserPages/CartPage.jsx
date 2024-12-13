import React, { useContext } from "react";
import { CartCard } from "../../Components/CART/Cartcard";
import CartContext from "../../store/cart-context";
import { usdCurrencyFormatter } from "../../helpers/currencyHelper";

const CartPage = () => {
	const cartCtx = useContext(CartContext);
	console.log(cartCtx.items);

	const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
		totalPrice + item.quantity * item.price;
	}, 0);

	const intPrice = usdCurrencyFormatter(cartTotal);

	return (
		<>
			<div className="w-full">
				<h1 className="font-semibold text-lg p-3 ">Cart</h1>
				<ul>
					{cartCtx.items.map((item) => (
						<CartCard
							key={item.id}
							price={item.price}
							name={item.name}
							image={item.image}
							brand={item.brand}
							oldPrice={item.oldPrice}
						/>
					))}
				</ul>

				<div className="bg-[#787977] text-start">
					<h1 className="text-[#8a8b85]">CART SUMMARY</h1>
					<div className="flex items-center justify-between bg-white">
						<p className="font-semibold">Subtotal</p>
						<span className="font-bold">{intPrice}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartPage;
