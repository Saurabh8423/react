import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    //give variables
    themeMode: "light",
    //and gives methods
    darkTheme: () => {},
    lightTheme: () =>{} ,

})

export const ThemeProvider= ThemeContext.Provider

export default function useTheme() {
    return useContext (ThemeContext)
}