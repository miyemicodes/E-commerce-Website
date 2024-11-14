import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";

export default function Footer() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.send(
				"service_vn4m2wy", // Replace with your EmailJS service ID
				"template_9w0ttyp", // Replace with your EmailJS template ID
				formData, // Data to send (name, email, message)
				"Jkf1CjDfXnqUxM1twcpKf" // Replace with your EmailJS user ID
			)
			.then(
				(result) => {
					console.log("Email successfully sent!", result.text);
				},
				(error) => {
					console.error("Failed to send email. Error:", error.text);
				}
			);

		// Reset form fields
		setFormData({
			name: "",
			email: "",
		});
	};

	return (
		<>
			<div className="flex flex-col bg-[#fbf3e2] border-t-[#fbe8d7] border-t-4">
				<div className="px-10 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 ">
					<div className="flex flex-col gap-4 text-sm">
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold ">Where about</h3>
							<p className="text-[#888783]">
								7 Washington Ave.Kentucky 38950 <br /> Oakland City
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold ">Contact</h3>
							<p className="text-[#888783]">(808) 389-5301</p>
						</div>
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold ">Mailbox</h3>
							<p className="text-[#888783]">lizzymiyemi@gmail.com</p>
						</div>
					</div>

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
								Shop
							</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								Contact us
							</li>
						</ul>

						<ul>
							<li className="font-semibold md:text-lg">Resource</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								FAQ
							</li>
							<li className="text-[#888783] hover:underline hover:duration-100">
								Reviews
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

					<form
						onSubmit={sendEmail}
						className="w-full flex flex-col items-center gap-3"
					>
						<h1 className="font-semibold text-lg">Subscribe</h1>

						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							placeholder="Enter your name"
							className="bg-transparent p-2 w-full border border-[#967f5048] rounded-full"
						/>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder="Enter email"
							className="bg-transparent p-2 w-full border border-[#967f5048] rounded-full"
						/>
						<button
							type="submit"
							className="bg-[#967f50] w-full text-white py-2 px-16 rounded-full font-semibold"
						>
							Submit
						</button>
					</form>
				</div>

				<div className=" px-12 py-4 bg-[#0b0b0a] flex flex-wrap items-center justify-between gap-2">
					<div className="text-white text-sm">
						&copy;2024 YesEl Company Limited. All Rights Reserved.
					</div>
					<div className="text-[#e9e9e8] font-serif text-2xl font-semibold">
						<h1>YesEl</h1>
					</div>
					<div className="flex flex-row">
						<ul className="flex gap-3 text-slate-400">
							<li className="bg-[#2a2725] text-xl p-1 border border-[#3d3d3a] rounded-2xl hover:text-slate-200 duration-300">
								<a href="https://github.com/miyemicodes">
									<FaGithub />
								</a>
							</li>

							<li className="bg-[#2a2725] text-xl p-1 border border-[#3d3d3a] rounded-2xl hover:text-slate-200 duration-300">
								<a href="https://www.instagram.com/oritsemiyemi?igsh=OHA0djU2NDczZXZv">
									<FaInstagram />
								</a>
							</li>

							<li className="bg-[#2a2725] text-xl p-1 border border-[#3d3d3a] rounded-2xl hover:text-slate-200 duration-300">
								<a href="https://x.com/Elizabe85838502?t=zXG_nKWUzPrbMBV2G0nddw&s=35">
									<FaXTwitter />
								</a>
							</li>

							<li className="bg-[#2a2725] text-xl p-1 border border-[#3d3d3a] rounded-2xl hover:text-slate-200 duration-300">
								<a href="https://www.linkedin.com/in/elizabeth-godfrey-180a11199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
									<FaLinkedin />
								</a>
							</li>

							<li className="bg-[#2a2725] text-xl p-1 border border-[#3d3d3a] rounded-2xl hover:text-slate-200 duration-300">
								<a href="https://github.com/miyemicodes">
									<FaMediumM />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
