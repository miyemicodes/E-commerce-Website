import React from "react";
import { Link } from "react-router-dom";
import { ContactAddress } from "./ContactFooter";
import { ContactSocials } from "./ContactSocials";
import { ContactForm } from "./ContactForm";

export default function Footer() {
	return (
		<>
			<div className="flex flex-col bg-[#fbf3e2] border-t-[#fbe8d7] border-t-4">
				<div className="px-10 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 ">
					<ContactAddress />

					<div className="flex flex-row flex-wrap items-start justify-between gap-8">
						<ul className="flex flex-col gap-1">
							<li className="font-semibold md:text-lg">Pages</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								<Link to="/about">About Us</Link>
							</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								Categories
							</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								<Link to="/shop">Shop</Link>
							</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								<Link to="/contact-us">Contact Us</Link>
							</li>
						</ul>

						<ul>
							<li className="font-semibold md:text-lg">Resource</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								<Link to="/faqPage">FAQs</Link>
							</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								<Link to="/reviews">Reviews</Link>
							</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								Blogs
							</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								Return Policy
							</li>
						</ul>

						<ul>
							<li className="font-semibold md:text-lg">Utilities</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								Style Guide
							</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								Error 404
							</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								Lincensing
							</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								Changelog
							</li>
						</ul>
					</div>

					<ContactForm />
				</div>

				<div className=" px-12 py-4 bg-[#0b0b0a] flex flex-wrap items-center justify-between gap-2">
					<div className="text-white text-sm">
						&copy;2024 YesEl Company Limited. All Rights Reserved.
					</div>
					<div className="text-[#e9e9e8] font-serif text-2xl font-semibold">
						<h1>YesEl</h1>
					</div>

					<ContactSocials />
				</div>
			</div>
		</>
	);
}
