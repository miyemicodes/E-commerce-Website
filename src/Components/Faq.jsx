// import React, { useRef, useState } from "react";
// import { RiArrowDownLine } from "react-icons/ri";
// import data from "./FaqFile";
// import "../index.css";

// const FaqItem = ({ question, answer, isOpen, onClick }) => {
//   const contentHeight = useRef();

//   return (
//     <div className="wrapper">
//       <button
//         className={`question-container ${isOpen ? "active" : ""}`}
//         onClick={onClick}
//       >
//         <p className="question-content">{question}</p>
//         <RiArrowDownLine className={`arrow ${isOpen ? "active" : ""}`} />
//       </button>
//       <div
//         ref={contentHeight}
//         className="answer-container"
//         style={
//           isOpen
//             ? { height: contentHeight.current.scrollHeight }
//             : { height: "0px" }
//         }
//       >
//         <p className="answer-container">{answer}</p>
//       </div>
//     </div>
//   );
// };

// function Faq() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleItemClick = (index) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <>
//       <section>
//         {data.map((item, index) => (
//           <FaqItem
//             key={index}
//             question={item.question}
//             answer={item.answer}
//             isOpen={activeIndex === index}
//             onClick={() => handleItemClick(index)}
//           />
//         ))}
//       </section>
//     </>
//   );
// }

// export default Faq;
