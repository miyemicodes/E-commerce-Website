import React from "react";
import Property from "../Components/Property";
import Footer from "../Components/Footer";
import Cover from "../Components/CoverTop";
import Testimonial from "../Components/Testimonial";
import Related from "../Components/RelatedProduct";
import { ProductDetailCard } from "../Components/CARD/ProductDetailCard";

export default function ProductDetails() {
	return (
		<>
			<section>
				<Cover />
				<ProductDetailCard />
				<Property />
				<Testimonial />
				<Related />
				<Footer />
			</section>
		</>
	);
}
