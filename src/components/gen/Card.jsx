import React from "react";

const Card = ({ name, phone,id, email, website }) => {
	
    

	const addFav = () => {
		// Aqui iria la logica para agregar la Card en el localStorage
	};

	return (
		<div className="card">
			<h2>Desde la card</h2>
			<div className="boxdedatoscard">
				<p>{item?.name}</p>
				<p>{item?.phone}</p>
				<p>{item?.email}</p>
				<p>{item?.website}</p>
			</div>
			<Link to="/home">Regresar</Link>

			<button onClick={addFav} className="favButton">
				Add fav
			</button>
		</div>
	);
};

export default Card;
