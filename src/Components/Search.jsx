import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import myProducts from "./Products";

export default function Search({onClickSearch}) {
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
		if (onClickSearch && typeof onClickSearch === 'function') {
			onClickSearch(query);
		}
	}



	return (
		<>
			<div className=" flex flex-row items-center justify-center py-2 px-1 border rounded-3xl border-[#c0bebe] w-60">
				<input
					type="text"
					placeholder="Search..."
					value={query}
					onChange={handleSearch}
					className="bg-transparent text-black border-none outline-none block"
				/>
				<button
					onClick={clickSearch}
					className="border-none outline-none"
				>
					<FaSearch className="text-[#a5a5a5]" />
				</button>
			</div>
			{/* {
			<ul>
				
			</ul>
		} */}
		</>
	);
}
