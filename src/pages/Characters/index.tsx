import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { CharacterCard } from "../../components/CharacterCard";
import { LayoutPage } from "../../components/LayoutPage";
import { Pagineted } from "../../components/Pagineted";
import { useLoad } from "../../hooks/useLoad";
import { SearchFilter } from "../../components/SearchFilter";
import { SelectPage } from "../../components/SelectPage";
import { NothingFound } from "../../components/NothingFound";

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

interface ApiResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

export function Characters() {
    const { setLoading } = useLoad()

    const [textFilter, setTextFilter] = useState<string>('');
    const [characters, setCharacters] = useState<ApiResponse>();
    const [totalPages, setTotalPages] = useState(0);

    const handleNewCharacterPage = async (page: number) => {
        setLoading(true);
        const pageNumber = page + 1;

        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
            );
            const newCharacterPageList = await res.json();

            setCharacters(newCharacterPageList);
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
            setCharacters(data);
            setTotalPages(data.info.pages);
        } catch (error) {
            console.log(error);
        }
    };

    const searchCharacters = async () => {
        setLoading(true);

        const url = `https://rickandmortyapi.com/api/character`;
        await fetchData(url);

        setLoading(false);
    };

    const handleFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTextFilter(e.target.value);
    }, []);

    const searchFilterText = useCallback(async () => {
        if (textFilter.trim() === "") {
            searchCharacters();
        } else {
            const url = `https://rickandmortyapi.com/api/character/?name=${textFilter}`;
            fetchData(url);
        }
    }, [textFilter]);

    useEffect(() => {
        searchCharacters();
    }, []);

    useEffect(() => {
        searchFilterText();
    }, [textFilter]);

    return (
        <LayoutPage>
            <div className="w-full flex flex-col gap-5 items-center md:flex-row md:justify-between mt-8 px-2">
                <SearchFilter text={textFilter} handleFilter={handleFilter} />
                <SelectPage />
            </div>

            <section className="h-full w-full flex justify-center items-center flex-wrap gap-5 py-20 px-0">
                {characters?.results
                    ? (
                        characters.results.map(item => {
                            return (
                                <CharacterCard
                                    key={item.id}
                                    name={item.name}
                                    origin={item.origin}
                                    status={item.status}
                                    species={item.species}
                                    image={item.image}
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
                        handleNewCharacterPage(selectedItem?.selected)
                    }
                />
            )}
        </LayoutPage>
    )
}