import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { LayoutPage } from "../../components/LayoutPage";
import { SearchFilter } from "../../components/SearchFilter";
import { SelectPage } from "../../components/SelectPage";
import { useLoad } from "../../hooks/useLoad";
import { Pagineted } from "../../components/Pagineted";
import { NothingFound } from "../../components/NothingFound";
import { LocationsCard } from "../../components/LocationsCard";

interface LocationApiResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Location[];
}

interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}


export function Locations() {
    const { setLoading } = useLoad()

    const [textFilter, setTextFilter] = useState<string>('');
    const [locations, setLocations] = useState<LocationApiResponse>();
    const [totalPages, setTotalPages] = useState(0);

    const handleNewLocationPage = async (page: number) => {
        setLoading(true);
        const pageNumber = page + 1;

        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/location/?page=${pageNumber}`
            );
            const data = await res.json();

            setLocations(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const fetchData = async (url: string) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setLocations(data);
            setTotalPages(data.info.pages);
        } catch (error) {
            console.log(error);
        }
    };

    const searchEpisodes = async () => {
        setLoading(true);

        const url = `https://rickandmortyapi.com/api/location`;
        await fetchData(url);

        setLoading(false);
    };

    const handleFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTextFilter(e.target.value);
    }, []);

    const searchFilterText = useCallback(async () => {
        if (textFilter.trim() === "") {
            searchEpisodes();
        } else {
            const url = `https://rickandmortyapi.com/api/location/?name=${textFilter}`;
            fetchData(url);
        }
    }, [textFilter]);

    useEffect(() => {
        searchEpisodes();
    }, []);

    useEffect(() => {
        searchFilterText();
    }, [textFilter]);


    return (
        <LayoutPage>
            <div className="w-full flex justify-between items-end mt-8 px-2">
                <SearchFilter text={textFilter} handleFilter={handleFilter} />
                <SelectPage />
            </div>


            <section className="h-full w-full flex justify-center items-center flex-wrap gap-5 py-20 px-0">
                {locations?.results
                    ? (
                        locations.results.map(item => {
                            return (
                                <LocationsCard
                                    key={item.id}
                                    name={item.name}
                                    type={item.type}
                                    dimension={item.dimension}
                                />
                            )
                        })
                    )
                    : <NothingFound />
                }
            </section>

            {totalPages > 1 && (
                <Pagineted
                    totalPages={totalPages}
                    handlePageChange={(selectedItem: { selected: number }) =>
                        handleNewLocationPage(selectedItem?.selected)
                    }
                />
            )}
        </LayoutPage>
    )
}