import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import NavbarPopup from "./components/NavbarPopup";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
	const [toggleNavbar, setToggleNavbar] = useState(false);

	return (
		<>
			<body className="flex flex-col min-h-screen">
				<Navbar setToggleNavbar={setToggleNavbar} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
				{toggleNavbar && <NavbarPopup setToggleNavbar={setToggleNavbar} />}
			</body>
		</>
	);
}

export default App;
