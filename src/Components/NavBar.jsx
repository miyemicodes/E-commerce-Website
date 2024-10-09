import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { FaBars, FaCaretDown } from "react-icons/fa";
import { FaCartShopping, FaUser } from "react-icons/fa6";

export default function NavBar() {
	return (
		<>
			<div
				data-aos="fade-down"
				className="border-b-2 p-5 bg-[#fbf3e2] flex w-[100%] items-center justify-between"
			>
				<div className=" flex flex-row items-center justify-center w-8 py-2 px-1 border rounded-2xl border-[#c0bebe] md:hidden">
					<FaBars className="text-[#a5a5a5] " />
				</div>

				<div className="hidden md:block">
					<ul className=" text-sm text-[#a5a5a5] font-semibold flex flex-row items-center justify-center gap-12 ">
						<li className="transition ease-in-out delay-150  hover:underline hover:duration-100">
							<Link to="/">
								<a href="">Home</a>
							</Link>
						</li>
						<li className="transition ease-in-out delay-150 hover:underline hover:duration-100">
							<Link to="/shop">
								<a href="">Shop</a>
							</Link>
						</li>
						<li className="transition ease-in-out delay-150 hover:underline hover:duration-100">
							<Link to="/about">
								<a href="">About Us</a>
							</Link>
						</li>
						<li className=" flex flex-row items-center justify-center transition ease-in-out delay-150 hover:underline hover:duration-100">
							<a href="">Page</a>
							<FaCaretDown />
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
					<Search />

					<div className="text-xl text-[#967f50] flex flex-row items-center justify-center gap-5">
						<FaCartShopping />
						<FaUser />
					</div>
				</div>
			</div>
		</>
	);
}
