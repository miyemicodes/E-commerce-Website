import React, { useState } from "react";
import emailjs from "emailjs-com";

export function ContactForm() {
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
		</>
	);
}
