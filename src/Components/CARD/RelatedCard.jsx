import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

export function RelatedCard(props) {
	return (
		<>
			<div className="flex flex-col items-start justify-start gap-2">
				<div className="h-[300px] w-[250px]">
					<img
						src={props.image}
						className="rounded-md h-[300px] w-[250px] object-cover"
					/>
				</div>

				<div className="flex flex-col items-start gap-2 w-[250px] ">
					<div className="w-full flex items-center justify-between">
						<p className="font-semibold font-sans">{props.name}</p>
						<FaCircleArrowRight className="text-white bg-black rounded-full text-xl" />
					</div>

					<div className="flex items-center gap-2">
						<p className="font-semibold text-lg">{props.price}</p>
						<span className="text-[#8a8b85] text-sm line-through">
							{props.oldPrice}
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
