import React from "react";
import Card from "../components/gen/Card.jsx";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Destacados = () => {
	return (
		<>
			<h1>Dentistas Destacados</h1>
			<div className="card-grid">
				{/* este componente debe consumir los destacados del localStorage */}
				{/* Deberan renderizar una Card por cada uno de ellos */}
			</div>
		</>
	);
};

export default Destacados;
