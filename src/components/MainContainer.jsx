import React from "react";

export default function MainContainer({ children }) {
	return (
		<div className="flex justify-center">
			<div className="max-w-7xl">{children}</div>
		</div>
	);
}
