import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { LayoutPage } from "../../components/LayoutPage";
import { SearchFilter } from "../../components/SearchFilter";
import { SelectPage } from "../../components/SelectPage";
import { useLoad } from "../../hooks/useLoad";
import { Pagineted } from "../../components/Pagineted";
import { EpisodesCard } from "../../components/EpisodesCard";
import { NothingFound } from "../../components/NothingFound";

interface ApiResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Episode[];
}

interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export function Episodes() {
    const { setLoading } = useLoad()

    const [textFilter, setTextFilter] = useState<string>('');
    const [episodes, setEpisodes] = useState<ApiResponse>();
    const [totalPages, setTotalPages] = useState(0);

    const handleNewEpisodePage = async (page: number) => {
        setLoading(true);
        const pageNumber = page + 1;

        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/episode/?page=${pageNumber}`
            );
            const data = await res.json();

            setEpisodes(data);
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
            setEpisodes(data);
            setTotalPages(data.info.pages);
        } catch (error) {
            console.log(error);
        }
    };

    const searchEpisodes = async () => {
        setLoading(true);

        const url = `https://rickandmortyapi.com/api/episode`;
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
            const url = `https://rickandmortyapi.com/api/episode/?name=${textFilter}`;
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
            <div className="w-full flex flex-col gap-7 items-center md:flex-row md:justify-between mt-8 px-2">
                <SearchFilter text={textFilter} handleFilter={handleFilter} />
                <SelectPage />
            </div>


            <section className="h-full w-full flex justify-center items-center flex-wrap gap-5 py-11 md:py-20 px-0">
                {episodes?.results
                    ? (
                        episodes.results.map(item => {
                            return (
                                <EpisodesCard
                                    key={item.id}
                                    name={item.name}
                                    episode={item.episode}
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
                        handleNewEpisodePage(selectedItem?.selected)
                    }
                />
            )}
        </LayoutPage>
    )
}