import React from "react";
import ReactDOM from "react-dom";

const CheckoutModal = ({ children, isOpen, onClose }) => {
	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<div>
			<button onClick={onClose}>close button test</button>
			<div>{children}</div>
		</div>
	);
};

export default CheckoutModal;
