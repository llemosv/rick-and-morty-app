import { ReactNode, createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type PageContextType = {
    currentPage: string,
}

type pageContextProviderProps = {
    children: ReactNode;
}

export const PageContext = createContext({} as PageContextType);

export function PageContextProvider({ children }: pageContextProviderProps) {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    return (
        <PageContext.Provider value={{ currentPage }}>
            {children}
        </PageContext.Provider>
    );
};
