import React from "react";
import FaqItem from "./FaqItem";
import faqs from "./FaqFile";

const FAQAccordion = () => {
  return (
    <div className="max-w-xl mx-auto mt-10">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;
