import React from "react";
import Property from "../Components/Property";
import Footer from "../Components/Footer";
import Cover from "../Components/CoverTop";
import Button from "../Components/ShopNow";
import productImage from "../assets/productDetail.jpg";
import Testimonial from "../Components/Testimonial";
import Related from "../Components/RelatedProduct";

export default function ProductDetails() {
	return (
		<>
			<section>
				<Cover />

				<div className="lg:h-[600px] py-10 px-6 grid grid-cols-1 items-center justify-center gap-2 md:grid-cols-2  md:px-18">
					<div className="grid grid-cols-4 grid-rows-3 gap-2 lg:h-[500px]">
						<img
							src={productImage}
							className="h-full w-full object-cover object-top [grid-area:1/1/4/4]"
						/>
						<img
							src={productImage}
							className="h-full object-cover object-top"
						/>
						<img
							src={productImage}
							className="h-full object-cover object-bottom"
						/>
						<img
							src={productImage}
							className="h-full object-cover object-center"
						/>
					</div>

					<div className="flex flex-col items-start justify-start gap-6">
						<div className="flex flex-col items-start justify-start gap-4">
							<span className=" text-mono text-2xl font-semibold">
								Necklace
							</span>
							<h2 className="font-serif text-3xl font-semibold">
								Vintage Double Neckpiece
							</h2>
							<p className="text-sm font-normal">
								Celebrate life's precious moments with our Golden Birthday
								Vintage Neckpiece ,exquisite and delightful to eyes that behold
								it sparkles....
							</p>
						</div>

						<Button />

						<div className="flex flex-col items-start justify-start gap-2">
							<div className="flex items-center justify-start font-semibold">
								<span className="text-lg">Price :</span>
								<span className="font-bold text-xl"> $ 79.99</span>
							</div>
							<div>
								<span className="font-semibold text-lg"> Product Number :</span>
								<span> 5672-9013</span>
							</div>
							<div>
								<span className="font-semibold text-lg"> Category : </span>
								<span>Ring </span>
							</div>
							<div>
								<span className="font-semibold text-lg"> Tags : </span>
								<span>Bracelet, Assesories</span>
							</div>
						</div>
					</div>
				</div>

				<Property />

				<div className="py-6 px-8 text-left">
					<div className="flex items-start justify-start gap-3 py-6">
						<button className="border font-semibold px-2 py-1 rounded-md hover:text-white hover:bg-[#967f50]">
							Description
						</button>
						<button className="border font-semibold px-2 py-1 rounded-md hover:text-white hover:bg-[#967f50]">
							Additional Information
						</button>
					</div>

					<div>
						<h1 className="font-serif text-3xl pb-4">Product Description</h1>
						<p className="text-sm text-[#8a8b85]">
							This is the most used props for routing. It helps in specifying
							the target location to which the link should navigate. It can be a
							string representing the path name or an object with path name.
							When you click on Dashboard you will be redirected to that
							component. This is the most used props for routing. It helps in
							specifying the target location to which the link should navigate.
							It can be a string representing the path name or an object with
							path name. When you click on Dashboard you will be redirected to
							that component.
						</p>
					</div>
				</div>

				<Testimonial />

				<Related />
				<Footer />
			</section>
		</>
	);
}
