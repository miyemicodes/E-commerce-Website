import React, { createContext, useState } from "react";

const UserProgressContext = createContext({
	progress: "", // 'pay', 'checkout'
	showCheckout: () => {},
	hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
	const [userProgress, setUserProgress] = useState("");

	function showCheckout() {
		setUserProgress("checkout");
	}

	function hideCheckout() {
		setUserProgress("");
	}

	const userProgressCtx = {
		progress: userProgress,
		showCheckout,
		hideCheckout,
	};
	console.log(userProgressCtx);
	return (
		<UserProgressContext.Provider value={userProgressCtx}>
			{children}
		</UserProgressContext.Provider>
	);
}

export default UserProgressContext;
