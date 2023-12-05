import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.js";
import { Home3 } from "./views/home3.js";
import injectContext from "./store/appContext";
import { Home2 } from "./views/home2.js";
import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js"


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className=" ">

			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<div className="container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/character/:userId" element={<Home2 />} />
							<Route path="/planets/:userId" element={<Home3 />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
					</div>
				</ScrollToTop>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);