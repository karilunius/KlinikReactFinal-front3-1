import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(true);

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
	};

	return (
		<ThemeContext.Provider value={State}>{children}</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;

