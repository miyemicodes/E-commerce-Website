import React, { useState } from "react";
import Search from "./Search";
import categoryImage from "../assets/categoryImage.jpg";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import myProducts from "./Products";
import ProductCard from "./CARD/ProductCard";
import Pagination from "./Pagination";

export default function ProductCategory() {
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 4;

	const totalPages = Math.ceil(myProducts.length / productsPerPage);
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = myProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<section className="py-10 px-2 flex flex-col lg:flex-row items-start justify-start gap-3 bg-transparent w-full">
				<div className="hidden lg:flex flex-col  gap-5 w-[20%]">
					<div className="flex-col items-start justify-start border p-1 rounded-lg">
						<h2 className="text-xl px-2 py-1 font-serif font-semibold">
							Product By Category
						</h2>

						<ul className="text-sm flex flex-col gap-1">
							<li className="px-2 py-1 hover:bg-[#f5f5f2]">Men</li>
							<li className="px-2 py-1 hover:bg-[#f5f5f2]"> Women</li>
							<li className="px-2 py-1 hover:bg-[#f5f5f2]">Necklaces</li>
							<li className="px-2 py-1 hover:bg-[#f5f5f2]">Earrings </li>
							<li className="px-2 py-1 hover:bg-[#f5f5f2]">Bracelets </li>
							<li className="px-2 py-1 hover:bg-[#f5f5f2]">Rings </li>
						</ul>
					</div>

					<div className="flex-col items-start justify-start border p-1 rounded-lg">
						<h2 className="text-xl px-2 py-1 font-serif font-semibold">
							Brand By Category
						</h2>
						<ul className="text-sm flex flex-col gap-1">
							<li className="px-2 py-1 hover:bg-[#f5f5f2]">Versace</li>
							<li className="px-2 py-1 hover:bg-[#f5f5f2]"> Pandora</li>
							<li className="px-2 py-1 hover:bg-[#f5f5f2]">Tiffany & Co.</li>
							<li className="px-2 py-1 hover:bg-[#f5f5f2]">Boucheron </li>
						</ul>
					</div>

					<div className="flex-col items-start justify-start border p-1 rounded-lg">
						<h2 className="text-xl px-2 py-1 font-serif font-semibold">
							Price
						</h2>
						{/* <Slider/> */}
						<div className="flex items-center justify-between">
							<span className="bg-[#f5f5f2] px-3 py-1">$100</span>
							<span className="bg-[#f5f5f2] px-3 py-1">$700</span>
							<span className="bg-[#f5f5f2] px-3 py-1">Filter</span>
						</div>
					</div>

					<div className="py-3 px-1 rounded-lg">
						<img
							src={categoryImage}
							className="rounded-lg"
						/>
					</div>
				</div>

				<div className="lg:hidden w-full flex flex-col gap-4">
					<div className="flex-col items-start justify-start border p-1 rounded-lg">
						<h2 className="text-base px-2 py-1 font-serif font-semibold">
							Product By Category
						</h2>
						<select className="px-2">
							<option>Men</option>
							<option>Women</option>
							<option>Necklaces</option>
							<option>Earrings</option>
							<option>Bracelets</option>
							<option>Rings</option>
						</select>
					</div>

					<div className="flex-col items-start justify-start border p-1 rounded-lg">
						<h2 className="text-base px-2 py-1 font-serif font-semibold">
							Brand By Category
						</h2>
						<select className="px-2 outline-[#f5f5f2]">
							<option className="px-2 py-1 hover:bg-[#f5f5f2]">Versace</option>
							<option className="px-2 py-1 hover:bg-[#f5f5f2]"> Pandora</option>
							<option className="px-2 py-1 hover:bg-[#f5f5f2]">
								Tiffany & Co.
							</option>
							<option className="px-2 py-1 hover:bg-[#f5f5f2]">
								Boucheron
							</option>
						</select>
					</div>

					<div className="flex-col items-start justify-start border p-1 rounded-lg">
						<h2 className="text-xl px-2 py-1 font-serif font-semibold">
							Price
						</h2>
						{/* <Slider/> */}
						<div className="flex items-center justify-between">
							<span className="bg-[#f5f5f2] px-3 py-1">$100</span>
							<span className="bg-[#f5f5f2] px-3 py-1">$700</span>
							<span className="bg-[#f5f5f2] px-3 py-1">Filter</span>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center gap-6 w-full lg:w-[80%] py-4">
					<div className="flex items-center justify-between px-8">
						<Search />
					</div>

					<ul className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 items-center justify-center">
						{currentProducts.map((product) => (
							<ProductCard
								key={product.id}
								{...product}
							/>
						))}
					</ul>
					
					<Pagination
						totalPages={totalPages}
						paginate={paginate}
						currentPage={currentPage}
					/>
				</div>
			</section>
		</>
	);
}
