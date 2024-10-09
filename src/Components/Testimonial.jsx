import React from "react";
import testiImages1 from "../assets/testimonialPic1.jpg";
import testiImages2 from "../assets/testimonialPic3.jpg";
import testiImages3 from "../assets/testimonialPic2.jpg";

export default function Testimonial() {
	return (
		<>
			<section className="hidden bg-white py-24 px-12 md:block">
				<div className="bg-[#fbf3e2] py-10">
					<h1 className="text-4xl font-semibold font-serif text-center pb-3">
						Hear from Those Whose <br />
						Lives We've Touched
					</h1>

					<div className="flex flex-row items-start justify-center gap-3 py-10 lg:px-20">
						<div
							data-aos="fade-right"
							className="flex flex-col items-start justify-start gap-3 w-[200px]"
						>
							<div className="h-[500px] w-[200px]">
								<img
									src={testiImages1}
									className="rounded-md h-[500px] w-[200px] object-cover"
								/>
							</div>

							<div>
								<p className="font-semibold">Sana Anwar</p>
								<span>media Assistant </span>
							</div>
						</div>

						<div
							data-aos="fade-up"
							data-aos-delay="1000"
							className="flex flex-col items-start justify-start gap-3 w-[200px] "
						>
							<div className="h-[500px] w-[200px]">
								<img
									src={testiImages3}
									className="rounded-md h-[500px] w-[200px] object-cover"
								/>
							</div>

							<div>
								<p className="font-semibold">Nina Anwarith</p>
								<span>Branch manager </span>
							</div>
						</div>

						<div
							data-aos="fade-left"
							className="flex flex-col items-start justify-start gap-3 grow"
						>
							<div className="h-[500px] w-full">
								<img
									src={testiImages2}
									className="rounded-md w-full h-[500px] object-cover"
								/>
							</div>

							<div>
								<p className="font-semibold">Sadiq Blaise</p>
								<span>Community manager </span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
