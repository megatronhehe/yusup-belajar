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
				<ul className="flex invisible ml-auto sm:visible">
					<li className="flex justify-end w-20">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`duration-200 ${isActive ? "font-semibold tracking-wide" : ""}`
							}
						>
							Home
						</NavLink>
					</li>
					<li className="flex justify-end w-20">
						<NavLink
							to="/about"
							className={({ isActive }) =>
								`duration-200 ${isActive ? "font-semibold tracking-wide" : ""}`
							}
						>
							About
						</NavLink>
					</li>
					<li className="flex justify-end w-20">
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`duration-200 ${isActive ? "font-semibold tracking-wide" : ""}`
							}
						>
							Contact
						</NavLink>
					</li>
					<li className="flex justify-end w-20">
						<NavLink
							to="/crud"
							className={({ isActive }) =>
								`duration-200 ${isActive ? "font-semibold tracking-wide" : ""}`
							}
						>
							CRUD
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
