import React,{ useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
/* export const endpoint1 = "https://jsonplaceholder.typicode.com/users/:id"; */
import { endpoint } from "./Home";
import axios from "axios";
import "../styles/light-theme.css";
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


   /*  useEffect(() => {
			const fetchData = () => {
				try {
					const response = axios.get(`${endpoint}/${id}`);
					setValues([response.data]); // Convertir los datos en un arreglo
				} catch (error) {
					console.log(error);
				}
			};

			fetchData();
		}, []); */

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
