import React from "react";
import featuredImage from "../assets/featured-image-main-2.jpg";
import Button from "./ShopNow";

export default function Unique() {
	return (
		<>
			<div className="bg-[#fbf3e2] grid grid-cols-2 items-center justify-center gap-3 py-14 px-8 h-full">
				<div
					data-aos="flip-right"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2500"
					className="hidden md:block rounded-lg md:w-[auto] lg:w-[500px] md:h-[500px]"
				>
					<img
						src={featuredImage}
						className="md:w-[auto] lg:w-[500px] md:h-[500px] object-contain rounded-lg"
					/>
				</div>

				<div className=" flex flex-col gap-3">
					<h2 className="text-3xl lg:text-5xl font-normal font-serif">
						Jewelry Unique Styles
					</h2>

					<p className="text-sm lg:w-[60%] lg:text-base">
						There are many variations of passages of Lorem20 Thank you for
						taking the time to scroll through! We hope you enjoyed our content
						and wish you a wonderful day. 😊
					</p>

					<Button />
				</div>
			</div>
		</>
	);
}
