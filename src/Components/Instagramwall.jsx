import React from "react";
import instaImage1 from "../assets/instapage-image-bracelet.jpg";
import instaImage2 from "../assets/intstapage-image-brooch.jpg";
import instaImage3 from "../assets/instapage-image-diamond.jpg";
import instaImage4 from "../assets/instapage-image-ring.jpg";
import instaImage5 from "../assets/instapage-image-neckpiece.jpg";

export default function Instawall() {
	return (
		<>
			<div className="flex flex-col items-center justify-center px-2 py-4 bg-[#fffffc]">
				<h2 className="text-xl md:text-3xl lg:text-4xl font-semibold font-serif  pb-3">
					Instagram Wall
				</h2>
				<h3 className="text-sm md:text-base lg:text-lg font-normal text-center pb-12">
					Follow us on instagram and be a part of our sparkling story
				</h3>

				<div className="grid grid-cols-4 grid-rows-3 gap-2 h-[500px] w-[330px] md:w-[500px] lg:h-[700px] lg:w-[700px] ">
					<div className="[grid-area:1/1/2/3]">
						<img
							src={instaImage1}
							data-aos="zoom-in-right"
							className="object-cover h-full w-full"
						/>
					</div>

					<div className="[grid-area:1/3/2/4]">
						<img
							src={instaImage2}
							className="object-cover h-full"
						/>
					</div>

					<div className="[grid-area:1/4/3/5]">
						<img
							src={instaImage5}
							className="object-cover h-full"
						/>
					</div>

					<div className="[grid-area:2/1/3/4] ">
						<img
							src={instaImage4}
							data-aos="fade-right"
							className="object-cover h-full w-full"
						/>
					</div>

					<div className="[grid-area:3/1/3/5] h-full">
						<img
							src={instaImage3}
							data-aos="fade-down"
							className="object-cover h-full w-full"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
