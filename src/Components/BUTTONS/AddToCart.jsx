import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";

export function AddToCartBtn({ showText = true }) {
	const navigate = useNavigate();

	return (
		<>
			<button
				className={` ${
					showText
						? "bg-[#967f50] text-sm flex items-center justify-center gap-1 px-2 py-2 text-[#fbf3e2] border border-[#fbf3e2] rounded-sm w-30"
						: "bg-transparent text-black text-lg"
				} `}
				onClick={() => navigate("/User/cart")}
			>
				{showText && <p>Add To Cart</p>}
				<FaCartArrowDown />
			</button>
		</>
	);
}
