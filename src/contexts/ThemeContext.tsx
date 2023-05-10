import { ReactNode, createContext, useState, useEffect } from "react";

type ThemeContextType = {
    theme: string,
    toggleTheme: () => void;
}

type themeContextProviderProps = {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: themeContextProviderProps) {
    const [theme, setTheme] = useState(() => {
        const themeActive = localStorage.getItem('RickAndMorty::theme');

        if (themeActive) {
            return themeActive;
        }

        return 'light'
    });

    const isLight = theme === 'light' ? true : false;

    useEffect(() => {
        if (!theme) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark')
            } else {
                setTheme('light')
            }
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    const toggleTheme = () => {
        if (isLight) {
            setTheme('dark');
            localStorage.setItem('RickAndMorty::theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('RickAndMorty::theme', 'light');
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}