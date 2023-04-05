import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = () => {
	return (
		<div className="Navbar">
			<img src="./logoklinik.jpg" alt="company-logo" />
			<img src="./logo-n.jpg" alt="company-logo" />
			<h5>DASHBOARD CLINIKA</h5>
			<nav>
				<ul className="mul">
					<li className="mli">
						<a to="/home">Inicio</a>
					</li>
					<li>
						<a to="/dentista">Dentistas</a>
					</li>
					<li>
						<a to="/contactos">Contactos</a>
					</li>
					<li>
						<a to="/destacados">Favoritos</a>
					</li>
				</ul>
			</nav>
			<div className="icons">
                <DarkModeIcon className="darktheme" alt="darkmodeicon" />
				<LogoutIcon to="/login"className="logout" alt="logouticon" />
			</div>
		</div>
	);
};

export default Navbar;
