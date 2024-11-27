import React, { useState } from "react";
import { RelatedCard } from "./CARD/RelatedCard";
import myProducts from "./JS/Products";
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

				<div className=" items-center justify-center w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
					{relateProducts.map((product) => (
						<RelatedCard
							key={product.id}
							{...product}
						/>
					))}
				</div>
			</section>
		</>
	);
}
