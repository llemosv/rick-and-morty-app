import { MoonStars, Sun } from "@phosphor-icons/react";
import { useTheme } from "../../hooks/useTheme";

export function ThemeButton() {
    const { toggleTheme, theme } = useTheme();

    return (
        <button onClick={toggleTheme} className="fixed bottom-9 right-5 z-40 bg-rickLight-200 dark:bg-rickDark-400 rounded-3xl p-1 items-center justify-center">

            {theme === 'light' ?
                <MoonStars
                    size={25}
                    className="text-rickLight-700 hover:text-rickLight-500 transition duration-200"
                />
                :
                <Sun
                    size={25}
                    className="dark:text-mortyLight-200 dark:hover:text-mortyLight-500 transition duration-200"
                />
            }
        </button>
    )
}