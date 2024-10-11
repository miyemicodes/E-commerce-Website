import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className="border-b-4 rounded-md p-3 text-gray-700"
			style={
				isOpen
					? { color: "#f2ece3", background: "#977f4a" }
					: { color: "black", background: "white" }
			}
		>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
			>
				<span className="font-semibold"> {question}</span>
				<span className="border px-1">{isOpen ? "-" : "+"}</span>
			</button>

			{isOpen && (
				<div className="pb-4 ">
					<p className="text-sm">{answer}</p>
				</div>
			)}
		</div>
	);
};

export default FaqItem;
