import React, { useState, useEffect } from "react";
import "../styles/App.css";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export const endpoint = "https://jsonplaceholder.typicode.com/users";



const Home = () => {

    const [valuesd, setValuesd] = useState(null);


	useEffect(() => {
		axios.get(endpoint)
			.then(({ data }) => {
                setValuesd(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

    return (
			<>
				<div className="containerhome">
					{valuesd?.map((item) => (
						<div key={item.id}>
							<AccountCircleIcon className="imgperfil" alt="foto" />
							<p>{item.name}</p>
						</div>
					))}
				</div>
			</>
		);
};

export default Home;
