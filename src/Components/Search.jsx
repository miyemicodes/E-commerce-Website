import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

export default function Search({ onClickSearch }) {
	const [query, setQuery] = useState("");

	const handleSearch = (e) => {
		const searchQuery = e?.target?.value?.toLowerCase();
		setQuery(searchQuery);
	};

	function clickSearch() {
		if (onClickSearch && typeof onClickSearch === "function") {
			onClickSearch?.(query);
		}
	}

	const clearQuery = () => {
		if (onClickSearch && typeof onClickSearch === "function") {
			onClickSearch?.("");
		}
		setQuery("");
	};

	return (
		<>
			<div className="w-full flex flex-row items-center justify-center gap-2">
				<div className="flex relative flex-row items-center justify-center py-2 px-1 border rounded-3xl border-[#c0bebe] w-full md:w-4/12 md:min-w-[500px]">
					<input
						type="text"
						placeholder="Search..."
						value={query}
						onChange={handleSearch}
						className="w-full bg-transparent text-black border-none outline-none block py-1 pl-2 pr-8"
					/>
					<button
						onClick={clickSearch}
						className="border-none outline-none absolute z-50 right-[12px] top-[50%] translate-y-[-50%] shrink-0"
					>
						<FaSearch className="text-[#a5a5a5] h-4 w-4" />
					</button>
				</div>
				{query ? (
					<button
						onClick={clearQuery}
						className="bg-white flex items-center p-2 rounded-2xl border-2 border-red-500 hover:bg-red-500"
					>
						<RiCloseLine className="text-red-500 text-2xl font-semibold hover:text-white" />
					</button>
				) : null}
			</div>
		</>
	);
}
