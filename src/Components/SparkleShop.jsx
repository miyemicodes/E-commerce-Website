import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function SparkleItem({ images }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		console.log(images);
	};

	const getVisibleImages = () => {
		const end = currentIndex + 4;
		if (end <= images.length) {
			return images.slice(currentIndex, end);
		} else {
			// When at the end, wrap around to the beginning
			return [
				...images.slice(currentIndex),
				...images.slice(0, end - images.length),
			];
		}
	};

	return (
		<>
			<section className="hidden relative px-16 py-8 bg-[#fffffc] md:block">
				<h1 className="text-2xl font-semibold font-serif text-center pb-3">
					Sparkle in Love
				</h1>

				<div className="relative max-w-4xl mx-auto">
					<div className="flex justify-between space-x-4">
						{getVisibleImages().map((image, index) => (
							<div
								key={index}
								className="min-w-[25%] p-2"
							>
								<img
									src={image}
									alt={`Product ${index}`}
									className="w-full h-64 object-cover rounded-md"
								/>
							</div>
						))}
					</div>
				</div>

				<button
					onClick={handlePrev}
					className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
				>
					<FaCaretLeft />
				</button>

				<button
					onClick={handleNext}
					className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
				>
					<FaCaretRight />
				</button>
			</section>
		</>
	);
}
