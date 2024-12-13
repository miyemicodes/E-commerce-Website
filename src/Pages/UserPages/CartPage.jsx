import React, { useContext } from "react";
import { CartCard } from "../../Components/CART/Cartcard";
import CartContext from "../../store/cart-context";
import { Cart } from "../../Components/CART/Cart";

const CartPage = () => {
	const cartCtx = useContext(CartContext);
	console.log(cartCtx.items);

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
				<Cart />
			</div>
		</>
	);
};

export default CartPage;
