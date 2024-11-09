import React, { useState } from "react";
import { RelatedCard } from "./CARD/RelatedCard";
import myProducts from "./Products";
import Pagination from "./Pagination";

export default function Related() {
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 4;

	const totalPages = Math.ceil(myProducts.length / productsPerPage);
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const relateProducts = myProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<section className="py-8 px-12">
				<div className="flex items-center justify-between pb-10">
					<h2 className="font-serif text-3xl pb-4"> Related Products</h2>

					<Pagination
						totalPages={totalPages}
						paginate={paginate}
						currentPage={currentPage}
						hidNumber={true}
					/>
				</div>

				<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-center gap-2 w-full">
					{relateProducts.map((product) => (
						<RelatedCard
							key={product.id}
							{...product}
						/>
					))}

					{/* <div className="flex flex-col items-start justify-start gap-2">
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
					</div> */}
				</div>
			</section>
		</>
	);
}
