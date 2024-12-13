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
				<h1 className="font-semibold text-2xl tracking-wide leading-[6px] p-3 mb-4">
					CART
				</h1>
				<div className="w-full flex flex-col lg:flex-row gap-6">
					<ul className="w-full border-2 border-[#f6ead1]">
						{cartCtx.items.map((item) => (
							<CartCard
								key={item.id}
								id={item.id}
								price={item.price}
								name={item.name}
								image={item.image}
								brand={item.brand}
								oldPrice={item.oldPrice}
								quantity={item.quantity}
								onIncrease={() => cartCtx.addItem(item)}
								onDecrease={() => cartCtx.removeItem(item.id)}
							/>
						))}
					</ul>
					<Cart />
				</div>
			</div>
		</>
	);
};

export default CartPage;
