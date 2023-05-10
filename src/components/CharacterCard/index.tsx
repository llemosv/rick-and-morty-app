import { Heartbeat, Info, Person, Planet, Skull } from "@phosphor-icons/react";

interface CharacterProps {
    name: string;
    status: string;
    species: string;
    origin: {
        name: string;
        url: string;
    };
    image: string;
}

export function CharacterCard(props: CharacterProps) {
    return (
        <div className="flex flex-col gap-2 w-[20rem] p-5 rounded-xl bg-rickLight-200 hover:bg-rickLight-300 dark:bg-rickDark-400 dark:hover:bg-rickDark-100 transition duration-200 cursor-default">
            <img
                className="rounded-xl object-cover"
                src={props.image}
                alt="character-img"
            />

            <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center">
                        <p className="font-medium mt-1">{props.name}</p>
                    </div>

                    <div className="flex gap-3 items-center">
                        {props.status === 'Alive'
                            ? <Heartbeat className="text-mortyLight-600" size={18} />
                            : <Skull className="text-red-500" size={18} />
                        }
                        <p className="leading-5">{props.status === 'Alive' ? 'Vivo(a)' : 'Morto(a)'}</p>
                    </div>

                    <div className="flex gap-3 items-center">
                        <Person size={18} />
                        <p className="leading-5">
                            {props.species === "unknown"
                                ? "Espécie desconhecida"
                                : props.species === "Human"
                                    ? "Humano(a)"
                                    : props.species
                            }
                        </p>
                    </div>

                    <div className="flex gap-3 items-center">
                        <Planet size={18} />
                        <p className="max-w-[11rem] overflow-hidden whitespace-nowrap text-ellipsis leading-5">{props.origin.name === "unknown" ? "Desconhecido" : props.origin.name}</p>
                    </div>

                </div>

                <div className="flex items-end">
                    <Info size={24} className="hover:text-rickLight-500 dark:hover:text-mortyLight-500 cursor-pointer transition duration-200" />
                </div>
            </div>

        </div>
    )
}
