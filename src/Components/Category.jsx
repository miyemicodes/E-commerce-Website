import React, { useState, useMemo } from "react";
import Search from "./Search";
import SaveIcon from "./SavedIcon";
import categoryImage from "../assets/categoryImage.jpg";
import myProducts from "./JS/Products";
import ProductCard from "./CARD/ProductCard";
import Pagination from "./Pagination";
import { categoryGender } from "./CATEGORY/Gender";
import { catProducts } from "./CATEGORY/Catproduct";
import { categoryBrand } from "./CATEGORY/Brand";
import { categoryPrice } from "./CATEGORY/Price";

export default function ProductCategory() {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchValue, setSearchValue] = useState("");
	const [genderCatValue, setGenderCatValue] = useState("");
	const [catProductValue, setCatProductValue] = useState("");
	const [brandCatValue, setBrandCatValue] = useState("");
	const [selectedFiltPrice, setSelectedFiltPrice] = useState(null);

	const productsPerPage = 9;

	const filterIsAvailable = useMemo(
		() =>
			Boolean(searchValue) ||
			Boolean(genderCatValue) ||
			Boolean(catProductValue) ||
			Boolean(brandCatValue) ||
			Boolean(selectedFiltPrice),
		[
			searchValue,
			genderCatValue,
			catProductValue,
			brandCatValue,
			selectedFiltPrice,
		]
	);

	const filteredProducts = useMemo(() => {
		if (filterIsAvailable) {
			const lowerSearchTerm = searchValue?.toLowerCase() || "";
			return myProducts.filter((product) => {
				// Convert properties to lowercase and check if searchTerm is included

				const matchSearch = searchValue
					? product.name.toLowerCase().includes(lowerSearchTerm) ||
					  product.description.toLowerCase().includes(lowerSearchTerm)
					: true;
				const matchGenderFilter = genderCatValue
					? product?.gender?.toLowerCase() === genderCatValue?.toLowerCase()
					: true;
				const matchProductFilter = catProductValue
					? product?.category?.toLowerCase() === catProductValue?.toLowerCase()
					: true;
				const matchBrandFilter = brandCatValue
					? product?.brand?.toLowerCase() === brandCatValue?.toLowerCase()
					: true;
				console.log("selectedFiltPrice::::", selectedFiltPrice);

				/* const matchminPricePriceFilter =
          selectedFiltPrice?.minPrice === null ||
          product?.price >= selectedFiltPrice?.minPrice;

        const matchmaxPricePriceFilter =
          selectedFiltPrice?.maxPrice === null ||
          product?.price <= selectedFiltPrice?.maxPrice; */

				const matchPriceFilter =
					(!selectedFiltPrice?.minPrice ||
						product.price >= selectedFiltPrice.minPrice) &&
					(!selectedFiltPrice?.maxPrice ||
						product.price <= selectedFiltPrice.maxPrice);

				return (
					matchSearch &&
					matchGenderFilter &&
					matchProductFilter &&
					matchBrandFilter &&
					matchPriceFilter
					/*  matchminPricePriceFilter &&
          matchmaxPricePriceFilter */
				);
			});
		}
		return [];
	}, [
		filterIsAvailable,
		searchValue,
		genderCatValue,
		catProductValue,
		brandCatValue,
		selectedFiltPrice,
	]);

	const totalPages = useMemo(
		() =>
			filterIsAvailable
				? Math.ceil(filteredProducts.length / productsPerPage)
				: Math.ceil(myProducts.length / productsPerPage),
		[filterIsAvailable, filteredProducts, productsPerPage]
	);
	const indexOfLastProduct = useMemo(
		() => currentPage * productsPerPage,
		[currentPage, productsPerPage]
	);
	const indexOfFirstProduct = useMemo(
		() => indexOfLastProduct - productsPerPage,
		[indexOfLastProduct, productsPerPage]
	);

	const currentProducts = useMemo(() => {
		console.log("filteredProducts::", filteredProducts);
		if (filterIsAvailable) {
			return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
		}
		return myProducts.slice(indexOfFirstProduct, indexOfLastProduct);
	}, [
		filterIsAvailable,
		filteredProducts,
		indexOfFirstProduct,
		indexOfLastProduct,
	]);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const handleSearchClick = (searchResult) => {
		setSearchValue(searchResult);
	};

	const handleGenderClick = (genderCategoryId) => {
		console.log(genderCategoryId);
		console.log(categoryGender);
		setGenderCatValue(genderCategoryId);
	};

	const handlecatProductClick = (catProductId) => {
		setCatProductValue(catProductId);
	};

	const handleBrandClick = (brandProductId) => {
		setBrandCatValue(brandProductId);
	};

	const handlePricefilter = (priceData) => {
		console.log(priceData);
		setSelectedFiltPrice(priceData);
	};

	const clearFilter = () => {
		setSearchValue("");
		setBrandCatValue("");
		setSelectedFiltPrice(null);
		setCatProductValue("");
		setCurrentPage(1);
		setGenderCatValue("");
	};

	return (
		<>
			<section className="py-10 px-2 flex flex-col lg:flex-row items-start justify-start gap-3 bg-transparent w-full">
				<div className="hidden lg:flex flex-col py-20 gap-5 w-[20%]">
					{filterIsAvailable ? (
						<button
							className="p-2 rounded-lg hover:bg-red-100 w-[200px] border border-red-600 text-red-600 text-md text-center"
							onClick={() => clearFilter()}
						>
							Clear
						</button>
					) : null}

					<div className="flex-col items-start justify-start border p-1 rounded-lg">
						<h2 className="text-xl px-2 py-1 font-serif font-semibold">
							Category By Gender
						</h2>
						<ul className="text-sm flex flex-col gap-1">
							{categoryGender.map((gender) => (
								<li
									className={`px-2 py-1 cursor-pointer ${
										genderCatValue === gender?.id ? "bg-red-300" : ""
									}`}
									key={gender?.id}
									onClick={() => handleGenderClick(gender?.id)}
								>
									{gender?.gender}
								</li>
							))}
						</ul>
					</div>

					<div className="flex-col items-start justify-start border p-1 rounded-lg">
						<h2 className="text-xl px-2 py-1 font-serif font-semibold">
							Category By Product
						</h2>

						<ul className="text-sm flex flex-col gap-1">
							{catProducts.map((product) => (
								<li
									className={`px-2 py-1 cursor-pointer ${
										catProductValue === product?.id ? "bg-red-300" : ""
									}`}
									key={product?.id}
									onClick={() => handlecatProductClick(product?.id)}
								>
									{product?.product}
								</li>
							))}
						</ul>
					</div>

					<div className="flex-col items-start justify-start border p-1 rounded-lg">
						<h2 className="text-xl px-2 py-1 font-serif font-semibold">
							Category By Brand
						</h2>

						<ul className="text-sm flex flex-col gap-1">
							{categoryBrand.map((brand) => (
								<li
									className={`px-2 py-1 cursor-pointer ${
										brandCatValue === brand?.id ? "bg-red-300" : ""
									}`}
									key={brand?.id}
									onClick={() => handleBrandClick(brand?.id)}
								>
									{brand?.brand}
								</li>
							))}
						</ul>
					</div>

					<div className="flex-col items-start justify-start border p-1 rounded-lg">
						<h2 className="text-xl px-2 py-1 font-serif font-semibold">
							Price
						</h2>

						<ul className="text-sm flex flex-col gap-1">
							{categoryPrice.map((p) => (
								<li
									className={`px-2 py-1 cursor-pointer ${
										selectedFiltPrice?.id === p.id ? "bg-red-300" : ""
									}`}
									key={p?.id}
									onClick={() => handlePricefilter(p)}
								>
									{p?.priceText}
								</li>
							))}
						</ul>
					</div>

					<div className="py-3 px-1 rounded-lg">
						<img
							src={categoryImage}
							className="rounded-lg"
						/>
					</div>
				</div>

				{/** the one for mobile view havent ediited one of them */}
				<div className="lg:hidden w-full flex flex-col gap-4">
					<div className="flex-col items-start justify-start border p-1 rounded-lg">
						<h2 className="text-xl px-2 py-1 font-serif font-semibold">
							Category By Gender
						</h2>

						<select
							className="text-sm flex-col gap-1"
							onChange={(e) => handlecatProductClick(e.target.value)}
							value={genderCatValue}
						>
							{categoryGender.map((gender) => (
								<option
									className={`px-2 py-1 cursor-pointer ${
										genderCatValue === gender?.id ? "bg-red-300" : ""
									}`}
									key={gender?.id}
									value={gender?.id}
								>
									{gender?.gender}
								</option>
							))}
						</select>
					</div>

					{/** only one that is working */}
					<div className="flex-col items-start justify-start border p-1 rounded-lg">
						<h2 className="text-xl px-2 py-1 font-serif font-semibold">
							Category By Productss
						</h2>

						<select
							className="text-sm flex-col gap-1"
							onChange={(e) => handlecatProductClick(e.target.value)}
							value={catProductValue}
						>
							{catProducts.map((product) => (
								<option
									className={`px-2 py-1 cursor-pointer ${
										catProductValue === product?.id ? "bg-red-300" : ""
									}`}
									key={product?.id}
									value={product?.id}
									onClick={() => handlecatProductClick(product?.id)}
								>
									{product?.product}
								</option>
							))}
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

						<select
							className="text-sm flex flex-col gap-1"
							onChange={(e) => handlecatProductClick(e.target.value)}
						>
							{categoryPrice.map((p) => (
								<option
									className={`px-2 py-1 cursor-pointer ${
										selectedFiltPrice?.id === p.id ? "bg-red-300" : ""
									}`}
									key={p?.id}
									onClick={() => handlePricefilter(p)}
									value={p.id}
								>
									{p?.priceText}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="flex flex-col justify-center gap-6 w-full lg:w-[80%] py-4">
					<div className="flex items-center justify-between">
						<Search onClickSearch={handleSearchClick} />
					</div>

					<ul className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-start justify-center">
						{currentProducts.map((product) => (
							<ProductCard
								key={product.id}
								{...product}
								SavedIconComponent={SaveIcon}
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
