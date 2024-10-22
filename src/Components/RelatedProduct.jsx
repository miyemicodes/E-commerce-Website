import React from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import instaImage1 from "../assets/instapage-image-bracelet.jpg";
import instaImage2 from "../assets/intstapage-image-brooch.jpg";
import articleImage1 from "../assets/article-image-1.jpg";
import articleImage3 from "../assets/article-image-3.jpg";

export default function Related() {
	return (
		<>
			<section className="py-8 px-12">
				<div className="flex items-center justify-between pb-10">
					<h2 className="font-serif text-3xl pb-4"> Related Products</h2>

					<div className="flex gap-2">
						<button>
							<FaCircleArrowLeft className="text-white bg-black rounded-full text-xl" />
						</button>

						<button>
							<FaCircleArrowRight className="text-white bg-black rounded-full text-xl" />
						</button>
					</div>
				</div>

				<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] items-center justify-center gap-2 w-full">
					<div className="flex flex-col items-start justify-start gap-2">
						<div className="h-[300px] w-[250px]">
							<img
								src={instaImage1}
								className="rounded-md h-[300px] w-[250px] object-cover"
							/>
						</div>

						<div className="flex flex-col items-start gap-2 w-[250px] ">
							<div className="w-full flex items-center justify-between">
								<p className="font-semibold font-sans"> Gold Hoop Earrings</p>
								<FaCircleArrowRight className="text-white bg-black rounded-full text-xl" />
							</div>

							<div className="flex items-center gap-2">
								<p className="font-semibold text-lg">$95.00</p>
								<span className="text-[#8a8b85] text-sm line-through">
									$100.00
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-start justify-start gap-2">
						<div className="h-[300px] w-[250px]">
							<img
								src={articleImage1}
								className="rounded-md h-[300px] w-[250px] object-cover"
							/>
						</div>

						<div className="flex flex-col gap-2 w-[250px]">
							<div className="flex flex-row items-center justify-between">
								<p className="font-semibold font-sans"> Gold Hoop Earrings</p>
								<FaCircleArrowRight className="text-white bg-black rounded-full text-xl" />
							</div>

							<div className="flex items-center gap-2">
								<p className="font-semibold text-lg">$95.00</p>
								<span className="text-[#8a8b85] text-sm line-through">
									$100.00
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-start justify-start gap-2">
						<div className="h-[300px] w-[250px]">
							<img
								src={articleImage3}
								className="rounded-md h-[300px] w-[250px] object-cover"
							/>
						</div>
						<div className="flex flex-col gap-2 w-[250px]">
							<div className="flex flex-row items-center justify-between">
								<p className="font-semibold font-sans"> Gold Hoop Earrings</p>
								<FaCircleArrowRight className="text-white bg-black rounded-full text-xl" />
							</div>

							<div className="flex items-center gap-2">
								<p className="font-semibold text-lg">$95.00</p>
								<span className="text-[#8a8b85] text-sm line-through">
									$100.00
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-start justify-start gap-2">
						<div className="h-[300px] w-[250px]">
							<img
								src={instaImage2}
								className="rounded-md h-[300px] w-[250px] object-cover"
							/>
						</div>
						<div className="flex flex-col gap-2 w-[250px]">
							<div className="flex flex-row items-center justify-between">
								<p className="font-semibold font-sans"> Gold Hoop Earrings</p>
								<FaCircleArrowRight className="text-white bg-black rounded-full text-xl" />
							</div>

							<div className="flex items-center gap-2">
								<p className="font-semibold text-lg">$95.00</p>
								<span className="text-[#8a8b85] text-sm line-through">
									$100.00
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
