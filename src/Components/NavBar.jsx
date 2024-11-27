import React, { useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaCartShopping, FaUser } from "react-icons/fa6";

export default function NavBar() {
	const [navOpen, setNavOpen] = useState(false);

	const handleClick = () => {
		setNavOpen(!navOpen);
	};

	return (
		<>
			<div
				data-aos="fade-down"
				className="border-b-2 p-5 bg-[#fbf3e2] flex w-[100%] items-center justify-between"
			>
				<button
					onClick={handleClick}
					className=" flex flex-row items-center justify-center w-8 py-2 px-1 border rounded-2xl border-[#c0bebe] md:hidden relative"
				>
					{navOpen ? (
						<ImCross className="text-[#a5a5a5]" />
					) : (
						<FaBars className="text-[#a5a5a5] absolute" />
					)}
				</button>

				<div className="hidden md:block">
					<ul className=" text-sm text-[#a5a5a5] font-semibold flex flex-row items-center justify-center gap-12 ">
						<li className="transition ease-in-out delay-150  hover:underline hover:duration-100">
							<Link to="/">Home</Link>
						</li>
						<li className="transition ease-in-out delay-150 hover:underline hover:duration-100">
							<Link to="/shop">Shop</Link>
						</li>
						<li className="transition ease-in-out delay-150 hover:underline hover:duration-100">
							<Link to="/about">About Us</Link>
						</li>
						<li className="relative inline-block group">
							<button className="bg-transparent">Services</button>
							<div className="hidden flex-col bg-white absolute min-w-[120px] shadow z-10 group-hover:flex">
								<Link
									to="/faqPage"
									className="block py-2 px-1 hover:bg-[#fbf3e2]"
								>
									FAQs
								</Link>
								<Link
									to="/reviews"
									className="block py-2 px-1 hover:bg-[#fbf3e2]"
								>
									Reviews
								</Link>
								<Link
									to="/contact-us"
									className="block py-2 px-1 hover:bg-[#fbf3e2]"
								>
									Contact Us
								</Link>
							</div>
						</li>
					</ul>
				</div>

				<div
					data-aos-delay="700"
					data-aos="zoom-in"
					className="text-[#272727] font-serif text-2xl font-semibold"
				>
					<h1>YesEl</h1>
				</div>

				<div className="flex flex-row items-center justify-center gap-5">
					<div className="hidden">
						<Search />
					</div>

					<div className="text-xl text-[#967f50] flex flex-row items-center justify-center gap-5">
						{/* /productdetail for texting and designing of the product details page ,navigating to it */}
						<Link to="/productdetail">
							<FaCartShopping />
						</Link>

						<Link to="/User">
							<FaUser />
						</Link>
					</div>
				</div>
			</div>

			{navOpen && (
				<ul className=" md:hidden bg-[#faf9f8f3] text-sm text-[#a5a5a5] font-semibold flex flex-col items-start justify-center gap-1 pb-2">
					<li className="transition ease-in-out delay-150  hover:text-white hover:bg-[#9e8e64] hover:duration-100 w-full p-2 ">
						<Link to="/">Home</Link>
					</li>

					<li className="transition ease-in-out delay-150  hover:text-white hover:bg-[#9e8e64] hover:duration-100 w-full p-2">
						<Link to="/shop">Shop</Link>
					</li>

					<li className="transition ease-in-out delay-150  hover:text-white hover:bg-[#9e8e64] hover:duration-100 w-full p-2">
						<Link to="/about">About Us</Link>
					</li>

					<li className="relative inline-block group transition ease-in-out delay-150  hover:text-white hover:bg-[#9e8e64] hover:duration-100 w-full p-2">
						<button className="bg-transparent">Services</button>
						<div className="hidden flex-col bg-white absolute min-w-[120px] shadow z-10 group-hover:flex">
							<Link
								to="/faqPage"
								className="block py-2 px-1 hover:bg-[#fbf3e2]"
							>
								FAQs
							</Link>
							<Link
								to="/"
								className="block py-2 px-1 hover:bg-[#fbf3e2]"
							>
								Reviews
							</Link>
							<Link
								to="/"
								className="block py-2 px-1 hover:bg-[#fbf3e2]"
							>
								Contact Us
							</Link>
						</div>
					</li>
				</ul>
			)}
		</>
	);
}
