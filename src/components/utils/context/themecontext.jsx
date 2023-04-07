import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = React.createContext({});

const ThemeContextProvider = ({ children }) => {

    /* 2const [currentTheme, setCurrentTheme] = useState("light"); */
    const [currentTheme, setCurrentTheme] = useState(
			localStorage.getItem("theme") || "light"
		);

	
		const toggleTheme = () => {
			const theme = currentTheme === "light" ? "dark" : "light";
			setCurrentTheme(theme);
			localStorage.setItem("theme", theme);
		};

		const State = {
			currentTheme,
			toggleTheme,
		};
		console.log(State);




	/* 1const [theme, setTheme] = useState(true);

	const handleTheme = () => {
		if (theme) {
			setTheme(false);
		} else {
			setTheme(true);
		}
	};

	const State = {
		theme,
		handleTheme,
	}; */

	return (
		<ThemeContext.Provider value={State}>{children}</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;

