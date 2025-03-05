import React from "react";
import { FaTrash } from "react-icons/fa";
import { usdCurrencyFormatter } from "../../helpers/currencyHelper";

export default function SavedCard({ product, ...props }) {
	const intPrice = usdCurrencyFormatter(props?.price);

	return (
		<div className="p-4 border rounded-md">
			<div className="flex items-center justify-between gap-2">
				<h3>{product.name}</h3>
				<div className="h-[120px] w-full lg:w-full">
					<img
						className="w-[100px] h-[100px] object-cover"
						src={product.image}
						alt={product.name}
					/>
				</div>
			</div>

			<div className="flex flex-col-reverse items-center justify-between gap-2">
				<p className="text-bold text-lg ">{intPrice}</p>
				<SaveIcon product={product} />
			</div>

			{/* Allows removing from saved page */}
		</div>
	);
}
