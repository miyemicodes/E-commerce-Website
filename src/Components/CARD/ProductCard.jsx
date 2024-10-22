import React from "react";
import { Link } from "react-router-dom";
import myProducts from "../Products";
import instaImage2 from "../../assets/instapage-image-neckpiece.jpg";
import { FaStarHalf } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function ProductCard(props) {
	console.log(props);

	return (
		<>
			<Link
				className="block"
				to={`/productdetail/${props?.id}`}
			>
				<div className="flex flex-col items-center justify-start gap-4 border rounded-md w-[auto] lg:w-[auto] px-1">
					<div className="h-[250px]  w-full lg:w-full">
						<img
							src={instaImage2}
							className="rounded-md h-[250px] w-full lg:w-full object-cover"
						/>
					</div>

					<div className="flex flex-col gap-2 w-full lg:w-full px-2">
						<div className="flex flex-row items-center justify-between">
							<p className="font-semibold font-sans">{props.name}</p>

							<div className="flex items-center justify-center gap-2">
								<span> {props.rating} </span>
								<FaStarHalf className="text-yellow-500" />
							</div>
						</div>

						<div className="flex items-center justify-between gap-2">
							<p className="font-semibold text-lg"> {props.price}</p>
							<FaCartShopping className="bg-transparent text-black text-lg " />
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}
