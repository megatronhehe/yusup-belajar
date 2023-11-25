import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import NavbarPopup from "./components/NavbarPopup";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainContainer from "./components/MainContainer";
import Crud from "./pages/Crud";

function App() {
	const [toggleNavbar, setToggleNavbar] = useState(false);

	return (
		<>
			<div className="flex flex-col min-h-screen">
				<Navbar setToggleNavbar={setToggleNavbar} />
				<MainContainer>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/crud" element={<Crud />} />
					</Routes>
				</MainContainer>

				<Footer />
				{toggleNavbar && <NavbarPopup setToggleNavbar={setToggleNavbar} />}
			</div>
		</>
	);
}

export default App;
