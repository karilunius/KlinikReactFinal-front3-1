import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField} from "@mui/material";
import { LoginContext } from "../components/utils/context/loginContext.jsx";
import "../styles/light-theme.css";



const Login = () => {


	const [values, setValues] = useState({ nickname: "", email: "" });

	const { handleLogin } = useContext(LoginContext);
	
	//instanciarlo
	const navigate = useNavigate();

	const handleSubmit = (e) => {
        e.preventDefault();
		handleLogin();
		navigate("/home");
		console.log(values);
	};


	return (
			<Box 
			className="login"
			component="form"
			/* sx={{
				display: "flex", flexDirection: "column", gap: "20px", width: "25vw"
			}} */
			onSubmit={handleSubmit}
		>
			<h2>LOGIN</h2>
			<TextField
				name="nickname"
				size="small"
				type="text"
				label="nombre"
				placeholder="Ingresa tu nombre"
				required={true}
				value={values.nickname}
				onChange={(e) => setValues({ ...values, nickname: e.target.value })}
			/>
			<TextField
				/* sx={{
					border: "1px solid white",
					"&:hover": {
						borderColor: "dodgerblue",
					},
					borderRadius: "20px",
					"& .MuiOutlinedInput-root.Mui-focused": {
						outline: "none",
					},
				}} */
				name="email"
				size="small"
				type="email"
				label="correo"
				placeholder="Ingresa tu correo"
				required={true}
				value={values.email}
				onChange={(e) => setValues({ ...values, email: e.target.value })}
			/>
			<Button
				sx={{ marginTop: "10px", backgroundColor: "rgb(125, 208, 241)" }}
				type="submit"
				size="small"
				variant="contained"
				from="form"
			>
				Ingresar
			</Button>
	        </Box>
	);
};

export default Login;



