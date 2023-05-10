import { Link } from 'react-router-dom';
import { usePage } from '../../hooks/usePage';

export function SelectPage() {
    const { currentPage } = usePage();

    return (
        <div className="flex bg-rickLight-200 shadow-md rounded-xl overflow-hidden dark:bg-rickDark-300 dark:text-slate-50">
            <Link
                to="/characters"
                className={`min-w-[10rem] text-center p-3 cursor-pointer hover:bg-rickLight-300 dark:hover:bg-rickDark-100 ${currentPage === '/characters' ? 'border-b-4 bg-rickLight-300 border-rickLight-500 dark:bg-rickDark-100 dark:border-mortyLight-500' : ''
                    } font-medium transition duration-200`}
            >
                Personagens
            </Link>
            <Link
                to="/episodes"
                className={`min-w-[10rem] text-center p-3 cursor-pointer hover:bg-rickLight-300 dark:hover:bg-rickDark-100 ${currentPage === '/episodes' ? 'border-b-4 bg-rickLight-300 border-rickLight-500 dark:bg-rickDark-100 dark:border-mortyLight-500' : ''
                    } font-medium transition duration-200`}
            >
                Episódios
            </Link>
            <Link
                to="/locations"
                className={`min-w-[10rem] text-center p-3 cursor-pointer hover:bg-rickLight-300 dark:hover:bg-rickDark-100 ${currentPage === '/locations' ? 'border-b-4 bg-rickLight-300 border-rickLight-500 dark:bg-rickDark-100 dark:border-mortyLight-500' : ''
                    } font-medium transition duration-200`}
            >
                Localizações
            </Link>
        </div>
    );
}


// quanto estiver selecionado
// border-b-4 border-rickLight-500 dark:bg-rickDark-100 dark:border-mortyLight-500