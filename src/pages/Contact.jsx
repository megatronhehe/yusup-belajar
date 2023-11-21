import React from "react";

import { FaPhone, FaEnvelope } from "react-icons/fa6";

// react <- javascript
// tailwind <- css

export default function Contact() {
	return (
		<main className="p-8 ">
			<h1 className="pb-8 mb-8 text-4xl text-center border-b">Contact us</h1>
			<ul className="flex flex-col items-center w-full mt-20 text-xl">
				<li className="flex items-center gap-4">
					<FaPhone /> 08 xxxx xxxx
				</li>
				<li className="flex items-center gap-4">
					<FaEnvelope /> satya@gmail.com
				</li>
			</ul>
		</main>
	);
}
