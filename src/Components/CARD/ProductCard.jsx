import React from "react";
import { Link } from "react-router-dom";
import { FaStarHalf } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { AddToCartBtn } from "../BUTTONS/AddToCart";
import { usdCurrencyFormatter } from "../../helpers/currencyHelper";

export default function ProductCard(props) {
	const intPrice = usdCurrencyFormatter(props?.price);

	return (
		<>
			<div className="flex flex-col items-center justify-start gap-4 border rounded-md h-full min-h-[300px] w-[auto] lg:w-[auto] px-1">
				<div className="h-[250px] w-full lg:w-full">
					<img
						src={props.image}
						className="rounded-md h-[250px] w-full lg:w-full object-cover"
					/>
				</div>

				<div className="flex flex-col gap-2 w-full lg:w-full px-2">
					<Link
						className="block"
						to={`/productdetail/${props?.id}`}
					>
						<div className="flex flex-row items-center justify-between">
							<p className="font-semibold font-sans">{props?.name}</p>

							<div className="flex items-center justify-center gap-2">
								<span> {props.rating} </span>
								<FaStarHalf className="text-yellow-500" />
							</div>
						</div>
					</Link>
					<div className="flex items-center justify-between gap-2">
						<p className="font-semibold text-lg"> {intPrice}</p>
						<div className="flex gap-2">
							<Link to="/User/saved-items">
								<GiSelfLove className=" text-lg" />
							</Link>

							<AddToCartBtn showText={false} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
