import React from "react";
import ReactDOM from "react-dom";

const CheckoutModal = ({ children, isOpen, onClose }) => {
	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<div className="modal-overlay">
			<div className="modal-content">{children}</div>
		</div>,
		document.getElementById("modal-root")
	);
};

export default CheckoutModal;
