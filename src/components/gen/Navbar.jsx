import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="Navbar">
				<img src="./logoklinik.jpg" alt="company-logo" />
				<img src="./logo-n.jpg" alt="company-logo" />
				<h5>DASHBOARD CLINIKA</h5>
				<nav className="mul">
					<Link to="/home">Home</Link>
					<Link to="/dentista">Dentistas</Link>
					<Link to="/contactos">Contactos</Link>
					<Link to="/destacados">Favoritos</Link>
				</nav>
				<div className="icons">
					<DarkModeIcon className="darkthemeicon" alt="darkmodeicon" />
					<Link to="/"><LogoutIcon className="logout" alt="logouticon"/></Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
