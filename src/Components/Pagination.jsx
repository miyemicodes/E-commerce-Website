import React from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
export default function Pagination({
	totalPages,
	paginate,
	currentPage,
	hidNumber = false,
}) {
	const pageNumber = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumber.push(i);
	}

	/* 	console.log(totalPages);
	 */
	return (
		<>
			<div className="flex items-center justify-center ">
				<button
					className={`p-2 rounded-full ${
						currentPage === 1
							? "text-gray-300"
							: "text-[#d1ab6c] hover:bg-gray-200"
					}`}
					onClick={() => paginate(currentPage - 1)}
					disabled={currentPage === 1}
				>
					<FaCircleArrowLeft className="text-xl" />
				</button>

				{!hidNumber &&
					pageNumber.map((number) => (
						<button
							key={number}
							onClick={() => paginate(number)}
							className={`hidden md:block px-3 py-1 rounded-lg ${
								currentPage === number
									? "bg-[#d1ab6c] text-white"
									: "text-gray-700 hover:bg-gray-200"
							}`}
						>
							{number}
						</button>
					))}

				<button
					className={`p-2 rounded-full ${
						currentPage === totalPages
							? "text-gray-400"
							: "text-[#d1ab6c] hover:bg-gray-200"
					}`}
					onClick={() => paginate(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					<FaCircleArrowRight className="text-xl " />
				</button>
			</div>
		</>
	);
}
