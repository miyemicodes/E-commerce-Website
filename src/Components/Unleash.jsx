import React from "react";
import Button from "./ShopNow";
import featuredImage1 from "../assets/featured-image-main-1.jpg";

export default function Unleash() {
	return (
		<>
			<div className="w-full px-12 py-6 flex flex-row gap-5">
				<div className="bg-[#f5f5f2] flex flex-col items-start justify-center flex-1 px-8 py-10 gap-8 rounded-md">
					<span className="bg-white text-black text-sm px-2 py-1 rounded-full w-fit font-semibold">
						Get 25% off this week
					</span>
					<p className="font-bold text-3xl pt-16 md:text-5xl md:px-5">
						Unleash Your Cravings,Not Your Wallet !
					</p>
					<Button />
				</div>

				<div
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2000"
					className="hidden md:block flex-1 rounded-md"
				>
					<img
						src={featuredImage1}
						className="rounded-md md:w-[500px] md:h-[500px] object-cover"
					/>
				</div>
			</div>
		</>
	);
}
