import React from "react";
import visionImage from "../assets/Vision-Image.jpg";

export default function Vision() {
	return (
		<>
			<section className="px-6 lg:px:16 py-4 flex flex-col md:flex-row gap-5 items-center justify-center ">
				<div className="w-[350px] h-[400px] md:w-[auto] lg:w-[500px] md:h-[500px] object-cover rounded-md flex-1">
					<img
						src={visionImage}
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2500"
						className="object-cover rounded-md w-[350px] h-[400px] md:w-[auto] lg:w-[500px] md:h-[500px]"
					/>
				</div>

				<div className="flex flex-col items-start justify-center gap-3 flex-1">
					<h2 className="font-semibold text-3xl font-serif">Our Vision</h2>
					<p className="text-sm">
						Our vision is to create timeless and exquisite jewelry that
						celebrates life's special moments .We are committed to crafting
						pieces that not only enhance beauty but also tell a story,
						reflecting the individuality and unique styles of each wearer.
					</p>
					<button
						data-aos="fade-up-left"
						className="bg-[#967f50] text-sm px-1 py-2 text-[#fbf3e2] border border-[#fbf3e2] rounded-sm w-36"
					>
						<p>Read More</p>
					</button>
				</div>
			</section>
		</>
	);
}
