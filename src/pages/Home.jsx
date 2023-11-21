import React from "react";

export default function Home() {
	return (
		<main className="flex gap-8 p-8">
			<div className="w-1/2">
				<h1 className="text-4xl">This is home page</h1>
				<p className="my-8">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum
					cupiditate asperiores deserunt, ipsa consectetur quos ut quam eum iure
					quibusdam repellendus modi debitis eius qui culpa itaque vitae facere!
				</p>
				<button className="px-4 py-2 font-bold text-white bg-blue-400 rounded-xl">
					Order now!
				</button>
			</div>

			<div className="w-1/2 border shadow-md rounded-xl"></div>
		</main>
	);
}
