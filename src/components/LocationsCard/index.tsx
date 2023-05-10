import { Globe, Info, Planet } from "@phosphor-icons/react";

interface EpisodesCardProps {
    name: string;
    type: string;
    dimension: string;
}

export function LocationsCard({ name, type, dimension }: EpisodesCardProps) {

    return (
        <div className="flex flex-col w-80 h-30 p-5 rounded-xl bg-rickLight-200 hover:bg-rickLight-300 dark:bg-rickDark-400 dark:hover:bg-rickDark-100 transition duration-200 cursor-default">
            <div className="flex gap-3 items-center">
                {type === 'Planet'
                    ? <Planet size={24} />
                    : <Globe size={24} />
                }
                <p className="text-lg font-medium mt-1 overflow-hidden whitespace-nowrap text-ellipsis dark:text-rickLight-300">{type}</p>
            </div>

            <div className="flex flex-col gap-1 mt-4">


                <div className="flex items-center">
                    <p className="text-rickLight-500 dark:text-mortyLight-500 font-medium mt-1 overflow-hidden whitespace-nowrap text-ellipsis w-52">
                        {name}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="mt-1 overflow-hidden whitespace-nowrap text-ellipsis w-52">
                        {dimension === "unknown"
                            ? "Dimensão desconhecida"
                            : dimension
                        }
                    </p>
                    <Info size={24} className="hover:text-rickLight-500 dark:hover:text-mortyLight-500 cursor-pointer transition duration-200" />
                </div>
            </div>
        </div>
    )
}