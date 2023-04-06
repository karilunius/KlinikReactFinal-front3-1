import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
export const endpoint = "https://jsonplaceholder.typicode.com/users";
import { IconButton } from "@mui/material";
import StarOutlineSharpIcon from "@mui/icons-material/StarOutlineSharp";
import "../styles/light-theme.css";

const Home = () => {


	const [values, setValues] = useState(null);

	useEffect(() => {
		axios
			.get(endpoint)
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
				<div key={item.id} className="containerdoc">
					<div className="iconprofile">
						<AccountCircleIcon
							sx={{ fontSize: "40px", color: "rgb(125, 208, 241)" }}
							className="imgperfil"
							alt="foto"
						/>
					</div>
					<p>{item.name}</p>
					<div className="iconstar">
						<IconButton>
							<StarOutlineSharpIcon
								sx={{
									fontSize: "40px",
									cursor: "pointer",
									color: "rgb(125, 208, 241)",
								}}
								alt="like"
							/>
						</IconButton>
					</div>
					<div className="iconarrow">
						<Link to={`/users/${item.id}`}>
							<IconButton>
								<ArrowCircleRightIcon
									sx={{
										fontSize: "40px",
										cursor: "pointer",
										color: "rgb(125, 208, 241)",
									}}
									alt="foto"
								/>
							</IconButton>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
