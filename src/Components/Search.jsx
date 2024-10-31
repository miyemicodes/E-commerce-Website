import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import myProducts from "./Products";

export default function Search() {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState(myProducts);

	const handleSearch = (e) => {
		const searchQuery = e?.target?.value?.toLowerCase();
		setQuery(searchQuery);
		console.log(query, searchQuery);
	};

	function clickSearch() {
		const filteredProducts = myProducts.filter((product) =>
			product.name.toLowerCase().includes(setQuery)
		);
		console.log(query);
	}

	return (
		<>
			<div className=" flex flex-row items-center justify-center w-8 py-2 px-1 border rounded-3xl border-[#c0bebe] md:w-60">
				<input
					type="text"
					placeholder="Search..."
					value={query}
					onChange={handleSearch}
					className="hidden bg-transparent text-black border-none outline-none md:block lg:block"
				/>
				<button onClick={clickSearch}>
					<FaSearch className="text-[#a5a5a5]" />
				</button>
			</div>
		</>
	);
}
