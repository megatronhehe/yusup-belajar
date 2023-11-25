import React from "react";

import { FaXmark } from "react-icons/fa6";

import { NavLink } from "react-router-dom";

export default function NavbarPopup({ setToggleNavbar }) {
	const closeNavbar = () => {
		setToggleNavbar(false);
	};

	return (
		<nav
			onClick={closeNavbar}
			className="fixed top-0 left-0 flex items-center justify-center w-full h-full backdrop-blur-sm"
		>
			<button className="absolute flex items-center justify-center w-12 h-12 text-2xl text-white bg-red-300 rounded-full top-4 right-4 hover:bg-red-400">
				<FaXmark />
			</button>
			<ul className="flex flex-col gap-4 text-4xl font-bold">
				<NavLink
					to="/"
					className="px-6 py-4 duration-200 hover:bg-black hover:text-white rounded-xl"
				>
					Home
				</NavLink>
				<NavLink
					to="/about"
					className="px-6 py-4 duration-200 hover:bg-black hover:text-white rounded-xl"
				>
					About
				</NavLink>
				<NavLink
					to="/contact"
					className="px-6 py-4 duration-200 hover:bg-black hover:text-white rounded-xl"
				>
					Contact
				</NavLink>
				<NavLink
					to="/crud"
					className="px-6 py-4 duration-200 hover:bg-black hover:text-white rounded-xl"
				>
					CRUD
				</NavLink>
			</ul>
		</nav>
	);
}
