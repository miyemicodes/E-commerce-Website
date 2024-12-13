import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";

import { usdCurrencyFormatter } from "../../helpers/currencyHelper";
import CartContext from "../../store/cart-context";

export function CartCard(props) {
	const cartCtx = useContext(CartContext);

	function handleRemoveMealFromCart(id) {
		cartCtx.removeItem(id);
		console.log("Out of here");
	}

	const intPrice = usdCurrencyFormatter(props?.price);
	console.log(props);
	return (
		<>
			<div className="w-full bg-white border-none rounded-md p-2 lg:w-[60%]">
				<div className="flex items-start justify-start gap-4">
					<div className="h-[100px] w-[100px]">
						<img
							src={props?.image}
							className="h-[100px] w-[100px] object-cover"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-[12px] text-[#616160]">{props.name} </p>
						<p className="text-[#8a8b85] text-[12px]">Seller : {props.brand}</p>
						<div>
							<span className="font-semibold"> {intPrice} </span>
							<span className="line-through text-[#787973]">
								{props.oldPrice}
							</span>
						</div>
						<span className="text-[#8a8b85] text-[12px]">In Stock</span>
					</div>
				</div>

				<div className="flex items-center justify-between mt-4">
					<button
						className="flex items-center gap-2 p-1 text-[#d1ab6c] hover:border-[#d1ab6c] hover:border-2"
						onClick={() => handleRemoveMealFromCart(props.id)}
					>
						<GoTrash />
						<p className="font-semibold">REMOVE</p>
					</button>

					<div className="flex items-center gap-7">
						<FaMinus className="bg-[#d1ab6c] text-white text-2xl p-1 rounded-md" />
						<span className="font-semibold"> 2 </span>
						<FaPlus className="bg-[#d1ab6c] text-white text-2xl p-1 rounded-md" />
					</div>
				</div>
			</div>
		</>
	);
}
