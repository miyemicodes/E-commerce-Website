import React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function CheckOut({ children, open }) {
	const dialog = useRef();

	useEffect(() => {
		if (open) {
			dialog.current.showModal();
		}
	}, [open]);

	return createPortal(<dialog ref={dialog}>{children}</dialog>);
}
