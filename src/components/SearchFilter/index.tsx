import { MagnifyingGlass } from "@phosphor-icons/react";
import { ChangeEvent } from "react";

interface SearchFilterProps {
    text: string;
    handleFilter: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchFilter({ text, handleFilter }: SearchFilterProps) {
    return (
        <div className="shadow-md rounded-xl">
            <div className="flex relative justify-between">
                <input
                    type="text"
                    value={text}
                    onChange={handleFilter}
                    className="w-72 p-3 pl-4 pr-10 rounded-xl bg-rickLight-200 dark:bg-rickDark-300 font-medium"
                    placeholder="Buscar"
                />
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <MagnifyingGlass size={24} />
                </span>
            </div>
        </div>
    )
}