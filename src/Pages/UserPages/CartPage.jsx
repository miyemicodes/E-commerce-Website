import React from "react";
import { CartCard } from "../../Components/CART/Cartcard";

const CartPage = () => {
	return (
		<>
			{/* trying to add the cartcard to the cart page but showing error that says  
      22:09:48 [vite] Pre-transform error: Failed to parse source for import analysis 
      because the content contains invalid JS syntax. If you are using JSX, make sure
       to name the file with the .jsx or .tsx extension.  */}
			<div className="hidden p-2 md:block md:w-[70%]">
				<h1 className="font-semibold text-lg p-3 ">Cart</h1>
				<CartCard />
			</div>
		</>
	);
};

export default CartPage;
