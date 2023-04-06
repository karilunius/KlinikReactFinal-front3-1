import React, { useState } from "react";
import Form from "../components/gen/Form.jsx";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contactos = () => {

	return (
		
			<div className="boxcontactos">
				<div className="boxcont1">
					<h2>¿Necesita más información?</h2>
					<p>Envienos sus preguntas y lo contactaremos.</p>
				</div>
			    <Form/>
			</div>
		
	);
};

export default Contactos;
