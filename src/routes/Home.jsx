import React, { useState, useEffect } from "react";
import "../styles/App.css";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
export const endpoint = "https://jsonplaceholder.typicode.com/users";
import { IconButton } from "@mui/material";


const Home = () => {

    const [values, setValues] = useState(null);


	useEffect(() => {
		axios.get(endpoint)
			.then(({ data }) => {
                setValues(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

    return (
			<div className="containerhome">
				<h1>Listado de Dentistas</h1>

				{values?.map((item) => (
					<>
						<div key={item.id} className="containerdoc">
							<AccountCircleIcon
								sx={{ fontSize: "40px" }}
								className="imgperfil"
								alt="foto"
							/>
							<p>{item.name}</p>
							<IconButton to={ "/dentista:`${item.id}`"}>
								<ArrowCircleRightIcon
									sx={{ fontSize: "40px", cursor: "pointer" }}
									alt="foto"
								/>
							</IconButton>
						</div>
					</>
				))}
			</div>
		);
};

export default Home;
