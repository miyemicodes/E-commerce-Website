import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "./store/cart-context";
import { SavedProductProvider } from "./store/saved-context";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // Animation duration in milliseconds
			once: true, // Whether animation should happen only once - while scrolling down
		});
	}, []);

	return (
		<SavedProductProvider>
			<CartContextProvider>
				<NavBar />
				{/* other children of App routes are here */}
				<Outlet />
			</CartContextProvider>
		</SavedProductProvider>
	);
}

export default App;
