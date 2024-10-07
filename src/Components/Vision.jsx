import React from "react";
import visionImage from "../assets/Vision-Image.jpg";

export default function Vision() {
	return (
		<>
			<section className="px-16 py-4 flex flex-col md:flex-row gap-5 items-center justify-center ">
				<div className=" md:h-[300px] lg:w-[500px] lg:h-[500px] object-cover rounded-md">
					<img
						src={visionImage}
						className="object-cover rounded-md md:h-[300px] md:w-[300px] lg:w-[500px] lg:h-[450px]"
					/>
				</div>

				<div className="flex flex-1 flex-col items-start justify-center gap-3">
					<h2 className="font-semibold text-3xl font-serif">Our Vision</h2>
					<p className="text-sm lg:w-[500px]">
						Our vision is to create timeless and exquisite jewelry that
						celebrates life's special moments .We are committed to crafting
						pieces that not only enhance beauty but also tell a story,
						reflecting the individuality and unique styles of each wearer.
					</p>
					<button className="bg-[#967f50] text-sm px-1 py-2 text-[#fbf3e2] border border-[#fbf3e2] rounded-sm w-36">
						<p>Read More</p>
					</button>
				</div>
			</section>
		</>
	);
}
