import React, { createContext, useState } from "react";

export const LoginContext = createContext({});

const LoginContextProvider = ({ children }) => {
	const [ isLogged, setIsLogged ] = useState(false);

	const handleLogin = () => {
		setIsLogged(true);
	}

	const propiedades = {
		isLogged,
		handleLogin,
	}

    return(
        <LoginContext.Provider value={propiedades}>
        {children}
        </LoginContext.Provider>
    );
};

export default LoginContextProvider;