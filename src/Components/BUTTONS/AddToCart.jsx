import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";

export function AddToCartBtn({ doOnClick, showText = true }) {

	const hendleClick = () => {
		if (doOnClick && typeof doOnClick === "function") {
			doOnClick?.();
		}
	}

	return (
		<>
			<button
				className={` ${
					showText
						? "bg-[#967f50] text-sm flex items-center justify-center gap-1 px-2 py-2 text-[#fbf3e2] border border-[#fbf3e2] rounded-sm w-30"
						: "bg-transparent text-black text-lg"
				} `}
				onClick={hendleClick}
			>
				{showText && <p>Add To Cart</p>}
				<FaCartArrowDown />
			</button>
		</>
	);
}
