import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate, Router } from "react-router-dom";
import { routes, Login } from "./navigate/Routes.js";
import { ProtectedRoute } from './components/utils/Protected/ProtectedRoute.jsx';
import LoginContextProvider from "../src/components/utils/context/loginContext.jsx";
import Footer from "./components/gen/Footer.jsx";
import Navbar from "./components/gen/Navbar.jsx";
import ThemeContextProvider from './components/utils/context/themecontext.jsx';
import "./styles/theme.css";

const App = () => {

    

	return (
		<LoginContextProvider>
			<ThemeContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route element={<ProtectedRoute />}>
							{routes.map(({ id, path, Component }) => (
								<Route
									key={id}
									path={path}
									element={
										<>
											<Navbar />
											<Component />
											<Footer />
										</>
									}
								/>
							))}
						</Route>
						<Route path="/" element={<Navigate to="/login"/>} />
					</Routes>
				</BrowserRouter>
				</ThemeContextProvider>
			</LoginContextProvider>
	);
}

export default App;

