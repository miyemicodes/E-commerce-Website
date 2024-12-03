import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AddToCartBtn } from "../BUTTONS/AddToCart";
import myProducts from "../JS/Products";
import { usdCurrencyFormatter } from "../../helpers/currencyHelper";
import CartContext from './../../store/cart-context';

export function ProductDetailCard() {
	const cartCtx = useContext(CartContext);

	function handleAddMealToCart() {
		cartCtx.addItem(product);
	}
	const { id } = useParams();

	const filterProducts = myProducts.filter((product) => product.id === id);
	const product = filterProducts[0];

	const intPrice = usdCurrencyFormatter(product?.price);

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<>
			<div className="lg:h-[600px] py-4 px-6 grid grid-cols-1 items-center justify-center gap-2 md:gap-8 md:grid-cols-2  md:px-18">
				<div className="grid grid-cols-4 grid-rows-3 gap-2 h-[300px] lg:h-[500px]">
					<img
						src={product.image}
						className="h-full w-full object-cover object-center [grid-area:1/1/4/4]"
					/>
					<img
						src={product.image}
						className="h-full object-cover object-top"
					/>
					<img
						src={product.image}
						className="h-full object-cover object-bottom"
					/>
					<img
						src={product.image}
						className="h-full object-cover object-center"
					/>
				</div>

				<div className="flex flex-col items-start justify-start gap-6">
					<div className="flex flex-col items-start justify-start gap-2">
						<span className="italic-font text-3xl font-semibold">
							{product.category}
						</span>
						<h2 className="font-serif text-3xl font-semibold">
							{product.name}
						</h2>
						<p className="text-sm font-normal line-clamp-3">
							{product.description}
						</p>
					</div>

					<AddToCartBtn
						onClick={handleAddMealToCart}
						showText={true}
					/>

					<div className="flex flex-col items-start justify-start gap-2">
						<div className="flex items-center justify-start font-semibold">
							<span className="text-lg">Price :</span>
							<span className="font-bold text-xl"> {intPrice}</span>
						</div>
						<div>
							<span className="font-semibold text-lg">Product Number :</span>
							<span> {product.ProductNumber} </span>
						</div>
						<div>
							<span className="font-semibold text-lg"> Category : </span>
							<span> {product.category} </span>
						</div>
						<div>
							<span className="font-semibold text-lg"> Tags : </span>
							<span> {product.tags} </span>
						</div>
					</div>
				</div>
			</div>

			<div className="py-2 px-8 text-left">
				<div className="flex items-start justify-start gap-3 py-6">
					<button className="border font-semibold px-2 py-1 rounded-md hover:text-white hover:bg-[#967f50]">
						Description
					</button>
					<button className="border font-semibold px-2 py-1 rounded-md hover:text-white hover:bg-[#967f50]">
						Additional Information
					</button>
				</div>

				<div>
					<h1 className="font-serif text-3xl pb-4">Product Description</h1>
					<p className="text-sm text-[#8a8b85]">{product.description}</p>
				</div>
			</div>
		</>
	);
}
