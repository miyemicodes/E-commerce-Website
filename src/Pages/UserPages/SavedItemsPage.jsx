import { useSavedProduct } from "../../store/saved-context";
import SaveIcon from "../../Components/SavedIcon";
import { usdCurrencyFormatter } from "../../helpers/currencyHelper";

const SavedPage = (props) => {
	const { savedProducts } = useSavedProduct();
	const intPrice = usdCurrencyFormatter(props?.price);

	console.log(intPrice);

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
						<div className="flex items-center justify-between gap-2">
							<h3>{product.name}</h3>
							<div className="h-[120px] w-full lg:w-full">
								<img
									className="w-[100px] h-[100px] object-cover"
									src={product.image}
									alt={product.name}
								/>
							</div>
						</div>
						<div className="flex flex-col-reverse items-center justify-between gap-2">
							<p className="text-bold text-lg ">{intPrice}</p>
							<SaveIcon product={product} />
						</div>
						{/* Allows removing from saved page */}
					</div>
				))
			)}
		</div>
	);
};

export default SavedPage;
