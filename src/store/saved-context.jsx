import { createContext, useContext, useState } from "react";

const SavedProductContext = createContext();

export const SavedProductProvider = ({ children }) => {
	const [savedProducts, setSavedProducts] = useState([]);

	const toggleSavedProducts = (product) => {
		if (!product || !product.id) {
			console.error("Invalid product passed to toggleSavedProducts", product);
			return;
		}

		setSavedProducts((prevSaved) => {
			const isAlreadySaved = prevSaved.some((p) => p.id === product.id);
			return isAlreadySaved
				? prevSaved.filter((p) => p.id !== product.id)
				: [...prevSaved, product];
		});
	};

	return (
		<SavedProductContext.Provider
			value={{ savedProducts, toggleSavedProducts }}
		>
			{children}
		</SavedProductContext.Provider>
	);
};

export const useSavedProduct = () => useContext(SavedProductContext);
