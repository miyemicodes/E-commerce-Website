import { useSavedProduct } from "../store/saved-context";
import { GiSelfLove } from "react-icons/gi";

const SaveIcon = ({ product }) => {
	const { savedProducts, toggleSavedProducts } = useSavedProduct();

  if (!product) {
		console.error("SaveIcon received undefined product");
		return null;
	}
	const isSaved = savedProducts.some((p) => p.id === product.id);

	return (
		<button onClick={() => toggleSavedProducts(product)}>
			<GiSelfLove
				className={`text-lg ${isSaved ? "text-red-500" : "text-gray-400"}`}
			/>
		</button>

		
	);

};

export default SaveIcon;
