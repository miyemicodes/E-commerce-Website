import React from "react";
import instaImage2 from "../../assets/instapage-image-neckpiece.jpg";
import { FaStarHalf } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function ProductCard() {
	return (
		<>
			<div className="flex flex-col items-center justify-start gap-4 border rounded-md w-[auto] lg:w-[auto] px-1">
				<div className="h-[250px]  w-full lg:w-full">
					<img
						src={instaImage2}
						className="rounded-md h-[250px] w-full lg:w-full object-cover"
					/>
				</div>

				<div className="flex flex-col gap-2 w-full lg:w-full px-2">
					<div className="flex flex-row items-center justify-between">
						<p className="font-semibold font-sans"> Necklaces</p>

						<div className="flex items-center justify-center gap-2">
							<span>4.5</span>
							<FaStarHalf className="text-yellow-500" />
						</div>
					</div>

					<div className="flex items-center justify-between gap-2">
						<p className="font-semibold text-lg">$95.00</p>
						<FaCartShopping className="bg-transparent text-black text-lg " />
					</div>
				</div>
			</div>
		</>
	);
}
