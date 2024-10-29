import React from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

export default function Pagination({ totalPages, paginate, currentPage }) {
	const pageNumber = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumber.push(i);
	}

	return (
		<>
			<div className="flex items-center justify-center ">
				<button
					className={`p-2 rounded-full ${
						currentPage === 1
							? "text-gray-400"
							: "text-blue-600 hover:bg-gray-200"
					}`}
					onClick={() => paginate(currentPage - 1)}
					disabled={currentPage === 1}
				>
					<FaCircleArrowLeft className="text-xl" />
				</button>

				{pageNumber.map((number) => (
					<button
						key={number}
						onClick={() => paginate(number)}
						className={`hidden md:block px-3 py-1 rounded-lg ${
							currentPage === number
								? "bg-blue-600 text-white"
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
							: "text-blue-600 hover:bg-gray-200"
					}`}
					onClick={() => paginate(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					<FaCircleArrowRight className="text-xl" />
				</button>
			</div>
		</>
	);
}
