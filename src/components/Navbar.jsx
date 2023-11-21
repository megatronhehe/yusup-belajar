import React from "react";

import { NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa6";

export default function Navbar({ setToggleNavbar }) {
	return (
		<header>
			<nav className="flex items-center justify-between px-8 py-6 border-b border-gray-300 font-extralight">
				<NavLink
					to="/"
					className="text-xl font-bold tracking-wide text-gray-600"
				>
					Navbar
				</NavLink>
				<ul className="flex invisible gap-6 ml-auto sm:visible">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? "font-semibold" : "")}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) => (isActive ? "font-semibold" : "")}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) => (isActive ? "font-semibold" : "")}
						>
							Contact
						</NavLink>
					</li>
				</ul>

				<button onClick={() => setToggleNavbar(true)} className="sm:invisible">
					<FaBars />
				</button>
			</nav>
		</header>
	);
}
