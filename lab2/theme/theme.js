import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./light";
import { darkTheme } from "./dark";

export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme); // Початково світла тема

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
