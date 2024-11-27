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
			<div className="w-full flex flex-col items-center justify-center gap-3 mt-10 mb-10 px-8">
				<div className="w-full flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between">
					<ContactAddress />
					<ContactForm />
				</div>
				<ContactSocials />
			</div>

			<Footer />
		</>
	);
}
