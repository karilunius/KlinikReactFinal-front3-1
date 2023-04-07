import React,{ useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { endpoint } from "./Home";
import axios from "axios";
import "../styles/theme.css";
import Card from "../components/gen/Card";

const Dentista = () => {

	const { id } = useParams();


	const [values, setValues] = useState(null);

	useEffect(() => {
			axios.get(`${endpoint}/${id}`)
			.then(({ data }) => {
				setValues(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);



	return (
		<div>
			<h1>Datos de Dentista</h1>
				<div className="boxdedatoscard">
					<p>{values?.id}</p>
					<p>{values?.name}</p>
					<p>{values?.phone}</p>
					<p>{values?.email}</p>
					<p>{values?.website}</p>
				</div>
				<Link to="/home">Regresar</Link>

			{/* {values?.map((item) => (
				<Card key={item?.id} {...item} values={values} />
			))} */}

		</div>
	);
}

export default Dentista;
