import { ChangeEvent, useCallback, useState } from "react";
import { LayoutPage } from "../../components/LayoutPage";
import { SearchFilter } from "../../components/SearchFilter";
import { SelectPage } from "../../components/SelectPage";

export function Locations() {
    const [textFilter, setTextFilter] = useState<string>('');

    const handleFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTextFilter(e.target.value);
    }, []);
    return (
        <LayoutPage>
            <div className="w-full flex justify-between items-end mt-8 px-2">
                <SearchFilter text={textFilter} handleFilter={handleFilter} />
                <SelectPage />
            </div>

            <p>Locations</p>
        </LayoutPage>
    )
}