import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";

export function AddToCartBtn() {
	return (
		<>
			<button className="bg-[#967f50] text-sm flex items-center justify-center gap-2 px-4 py-2 text-[#fbf3e2] border border-[#fbf3e2] rounded-sm w-36">
				<p>Add To Cart</p>
				<FaCartArrowDown />
			</button>
		</>
	);
}
