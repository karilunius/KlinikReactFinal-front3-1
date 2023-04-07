import React, { useState } from "react";
import "../../styles/light-theme.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";

const Form = () => {
			const [nombre, setNombre] = useState("");
			const [email, setEmail] = useState("");
			const [validar, setValidar] = useState(false);
			const [mensaje, setMensaje] = useState(false);

		const handleSubmit = (e) => {
			e.preventDefault();

			console.log(nombre);
			console.log(email);

			let validacionA = false;
			let validacionB = false;

			if (nombre.trim().length >= 3) {
				console.log("Es Igual y Mayor a 3 Caracteres");
				validacionA = true;
			} else {
				console.log("Es Menor a 3 Caracteres");
				validacionA = false;
			}

			if (email.length >= 6) {
				console.log("Es Igual y Mayor a 6 Caracteres");
				validacionB = true;
			} else {
				console.log("Es Menor a 6 Caracteres");
				validacionB = false;
			}

			if (validacionA === true && validacionB === true) {
				setValidar(false);
				setMensaje(true);
				
			} else {
				setValidar(true);
				setMensaje(false);
			}
		};

	return (
		<form id="form" className="containerform" onSubmit={handleSubmit}>
			<div className="formplaceholders">
				<input
					type={"text"}
					placeholder={`Ingresa tu Nombre: `}
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
					required={true}
				></input>
				<input
					type={"text"}
					placeholder={`Ingresa tu email: `}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required={true}
				></input>
				<button className="btncontform" form="form" btn="submit">
					Enviar
				</button>
			</div>
			<div className="formsmsbox">
				{validar && (
					<div className="formsmsbox">
						<p>Por favor, verifique sus datos. Los datos no fueron enviados.</p>
						<span>
							<DangerousIcon sx={{color: "red"}} />
						</span>
					</div>
				)}
				{mensaje && (
					<div className="formsmsbox">
						<p name={nombre} email={email}>
							Gracias por tu envío. Te contactaremos a tu correo
						</p>
						<span>
							<CheckCircleIcon sx={{color: "green"}} />
						</span>
					</div>
				)}
			</div>
		</form>
	);
};

export default Form; 
