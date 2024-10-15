import React from "react";
import "../index.css";
import { useLocation } from "react-router-dom";

export default function Cover() {
	const location = useLocation();

	const getPageName = () => {
		switch (location.pathname) {
			case "/shop":
				return "Browse Our Products";
			case "/about":
				return "About Our Shop";
			case "/productdetail":
				return "Product Details";
			default:
				return "E-commerce Site";
		}
	};

	return (
		<>
			<section className="cover flex items-center justify-center">
				<h2 className="flex items-center justify-center text-4xl text-black font-semibold font-serif">
					{getPageName()}
				</h2>
			</section>
		</>
	);
}
