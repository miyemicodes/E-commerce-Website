import React from "react";
import Cover from "../Components/CoverTop";
import Footer from "../Components/Footer";
import { ContactAddress } from "../Components/ContactFooter";
import { ContactForm } from "../Components/ContactForm";
import { ContactSocials } from "../Components/ContactSocials";

export default function ContactUsPage() {
	return (
		<>
			<Cover />
			<div className="w-full flex flex-col  items-center justify-center mt-10 mb-10 px-4">
				<div className="w-full flex flex-col md:flex-row items-center justify-center gap-3 mb-6 ">
					<div className=" w-full lg:w-[50%] h-fit border-2 border-[#f6ead1] py-3 px-6">
						<ContactAddress />
					</div>

					<div className="w-full lg:w-[50%] h-fit border-2 border-[#f6ead1] py-3 px-6">
						<ContactForm />
					</div>
				</div>
				<ContactSocials />
			</div>

			<Footer />
		</>
	);
}
