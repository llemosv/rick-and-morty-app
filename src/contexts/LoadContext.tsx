import { ReactNode, createContext, useState } from "react";

type LoadContextType = {
    show: boolean,
    setLoading: (isShow: boolean) => void;
}

type loadContextProviderProps = {
    children: ReactNode;
}

export const LoadContext = createContext({} as LoadContextType);

export function LoadContextProvider({ children }: loadContextProviderProps) {
    const [show, setShow] = useState(false);

    const setLoading = (isShow: boolean) => {
        setShow(isShow);
    }

    return (
        <LoadContext.Provider
            value={{
                setLoading,
                show
            }}
        >
            {children}
        </LoadContext.Provider>
    );
}