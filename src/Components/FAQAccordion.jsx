import React from "react";
import FaqItem from "./FaqItem";
import faqs from "./JS/FaqFile";

const FAQAccordion = () => {
	return (
		<section className="bg-[#ededea]  py-16">
			<div className="flex flex-col items-center justify-center gap-3">
				<span className="text-sm font-semibold"> Ask Us Anything</span>
				<h1 className="text-4xl font-serif">Frequently Asked Questions</h1>
				<p className="text-sm">
					Our friendly team would love to answer your questions.
				</p>
			</div>

			<div className="max-w-xl mx-auto mt-10">
				{faqs.map((faq, index) => (
					<FaqItem
						key={index}
						question={faq.question}
						answer={faq.answer}
					/>
				))}
			</div>
		</section>
	);
};

export default FAQAccordion;
