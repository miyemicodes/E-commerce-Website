import React, { useContext } from "react";
import { CartCard } from "../../Components/CART/Cartcard";
import { Cart } from "../../Components/CART/Cart";
import CartContext from "../../store/cart-context";

const CartPage = () => {
	const cartCtx = useContext(CartContext);

	return (
		<>
			<div className="w-full">
				<h1 className="font-semibold text-lg p-3 ">Cart</h1>
				<ul>
					{cartCtx.items.map((item) => (
						<CartCard key={item.id} />
					))}
				</ul>
				<Cart />
			</div>
		</>
	);
};

export default CartPage;
