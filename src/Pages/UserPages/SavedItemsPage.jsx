import { useSavedProduct } from "../../store/saved-context";
import SaveIcon from "../../Components/SavedIcon";

const SavedPage = () => {
	const { savedProducts } = useSavedProduct();

	return (
		<div>
			<h1>Saved Products</h1>
			{savedProducts.length === 0 ? (
				<p>No saved products.</p>
			) : (
				savedProducts.map((product) => (
					<div
						key={product.id}
						className="p-4 border rounded-md"
					>
						<h3>{product.name}</h3>
						<SaveIcon product={product} />
						{/* Allows removing from saved page */}
					</div>
				))
			)}
		</div>
	);
};

export default SavedPage;
