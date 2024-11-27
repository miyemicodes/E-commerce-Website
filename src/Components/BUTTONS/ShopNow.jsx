import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Button() {
	return (
		<>
			<Link to="/productdetail/:id">
				<button
					data-aos="fade-up-right"
					className="bg-[#967f50] text-sm flex items-center justify-center gap-2 px-6 py-2 text-[#fbf3e2] border border-[#fbf3e2] rounded-sm w-36"
				>
					<p>Shop Now</p>
					<FaCartArrowDown />
				</button>
			</Link>
		</>
	);
}
