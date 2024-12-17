import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import { usdCurrencyFormatter } from "../../helpers/currencyHelper";
import CheckoutModal from "../CheckModal";
import Input from "../Input";

export function Cart() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	const cartCtx = useContext(CartContext);

	const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
		return totalPrice + item.quantity * item.price;
	}, 0);

	const totalQuantity = cartCtx.items.reduce((totalItem, item) => {
		return totalItem + item.quantity;
	}, 0);

	const intPrice = usdCurrencyFormatter(cartTotal);

	return (
		<>
			<div className="w-full h-fit border-2 border-[#f6ead1] text-start px-4 py-6 lg:w-[40%]">
				<h1 className="text-black font-semibold text-xl mb-4">CART SUMMARY</h1>
				<div className="flex flex-col">
					<div className="flex items-center justify-between bg-white mb-4">
						<p className="font-semibold text-lg">Total Items : </p>
						<span className="font-bold border-2 border-[#f6ead1] p-4 text-lg">
							{totalQuantity}
						</span>
					</div>
					<div className="flex items-center justify-between bg-white mb-4">
						<p className="font-semibold text-lg">Total Amount : </p>
						<span className="font-bold border-2 border-[#f6ead1] p-4 text-lg">
							{intPrice}
						</span>
					</div>
				</div>

				{cartCtx.items.length > 0 && (
					<button
						onClick={openModal}
						className="w-full bg-[#967f50] font-semibold px-4 py-2 text-[#f6ead1] "
					>
						CHECKOUT
					</button>
				)}
			</div>

			<CheckoutModal
				isOpen={isModalOpen}
				onClose={closeModal}
			>
				<form className="w-[500px]">
					<div className="flex items-center justify-between">
						<p className="font-bold border-2 border-[#f6ead1] p-2 text-xl">
							{intPrice}
						</p>
						<button
							className="font-bold text-3xl"
							onClick={closeModal}
						>
							&times;
						</button>
					</div>

					<h2 className="text-2xl font-semibold">
						How would you like too get your order ?
					</h2>
					<div className="control-row">
						<Input
							label="First Name"
							type="text"
							id="first-name"
						/>
						<Input
							label="Last Name"
							type="text"
							id="last-name"
						/>
					</div>
					<Input
						label="Street address"
						type="text"
						id="street"
					/>

					<div className="control-row">
						<Input
							label="Postal Code"
							type="text"
							id="postal-code"
						/>
						<Input
							label="State"
							type="text"
							id="state"
						/>
						<Input
							label="Town/City"
							type="text"
							id="city"
						/>
					</div>

					<Input
						label="E-Mail Address"
						type="email"
						id="email"
					/>

					<button className="w-full bg-[#967f50] font-semibold px-4 py-2 text-[#f6ead1] mt-4">
						Go to Payment
					</button>
				</form>
			</CheckoutModal>
		</>
	);
}
