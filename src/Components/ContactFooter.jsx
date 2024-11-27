import React from "react";

export function ContactAddress() {
	return (
		<>
			<div className="flex flex-col gap-4 text-sm">
				<div className="flex flex-col gap-2">
					<h3 className="font-semibold ">Where about</h3>
					<p className="text-[#888783]">
						7 Washington Ave.Kentucky 38950 <br /> Oakland City
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="font-semibold ">Contact</h3>
					<p className="text-[#888783]">(808) 389-5301</p>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="font-semibold ">Mailbox</h3>
					<p className="text-[#888783]">lizzymiyemi@gmail.com</p>
				</div>
			</div>
		</>
	);
}
