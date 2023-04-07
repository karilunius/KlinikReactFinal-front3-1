import React, { useState, useEffect, useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/context/themecontext";
import "../../styles/theme.css";

const Navbar = () => {


	const { currentTheme, toggleTheme } = useContext(ThemeContext);
	
	return (
		<>
			<div className={`Navbar ${currentTheme ? "light-theme" : "dark-theme"}`}>
				<img src="./logoklinik.jpg" alt="company-logo" />

				<img src="./logo-n-b.jpg" alt="company-logo" />
				<h5>DASHBOARD CLINIKA</h5>
				<nav className="mul">
					<Link style={{ color: "rgb(125, 208, 241)" }} to="/home">
						Home
					</Link>
					<Link style={{ color: "rgb(125, 208, 241)" }} to="/contactos">
						Contactos
					</Link>
					<Link style={{ color: "rgb(125, 208, 241)" }} to="/destacados">
						Favoritos
					</Link>
				</nav>
				<div className="icons">
					<DarkModeIcon
						className="darkthemeicon"
						alt="darkmodeicon"
						onClick={toggleTheme}
					/>
					<Link to="/">
						<LogoutIcon className="logout" alt="logouticon" />
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
