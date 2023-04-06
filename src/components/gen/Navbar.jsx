import React, { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import "../../styles/light-theme.css";

const Navbar = () => {

	
/*     const [img, setImagen] = useState("./logo-n-b.jpg");

	const cambiarImagen = () => {
		setImagen("./logo-n.jpg");
	};

	const restaurarImagen = () => {
		setImagen("./logo-n-b.jpg");
	};

	useEffect(() => {
		// actualiza el estado de la imagen solamente cuando el componente se haya montado
		setImagen("./logo-n-b.jpg");
	}, []);
 */
	return (
		<>
			<div className="Navbar">
				<img src="./logoklinik.jpg" alt="company-logo" />
				{/* <img onMouseOver={cambiarImagen()} onMouseOut={restaurarImagen()} src={img} alt="company-logo" /> */}
				<img src="./logo-n-b.jpg" alt="company-logo" />
				<h5>DASHBOARD CLINIKA</h5>
				<nav className="mul">
					<Link style={{ color: "rgb(125, 208, 241)" }} to="/home">
						Home
					</Link>
					<Link style={{ color: "rgb(125, 208, 241)" }} to="/dentista">
						Dentistas
					</Link>
					{/* <Link style={{ color: "rgb(125, 208, 241)" }} to="/contactos">
						Contactos
					</Link> */}
					<Link style={{ color: "rgb(125, 208, 241)" }} to="/destacados">
						Favoritos
					</Link>
				</nav>
				<div className="icons">
					<DarkModeIcon className="darkthemeicon" alt="darkmodeicon" />
					<Link to="/">
						<LogoutIcon className="logout" alt="logouticon" />
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
