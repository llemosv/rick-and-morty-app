import { useEffect, useState } from "react";
import { CharacterCard } from "../../components/CharacterCard";
import { LayoutPage } from "../../components/LayoutPage";
import { Pagineted } from "../../components/Pagineted";
import { useLoad } from "../../hooks/useLoad";

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
    const [characters, setCharacters] = useState<ApiResponse>();
    const [totalPages, setTotalPages] = useState(0);

    const searchCharacters = async () => {
        setLoading(true)
        const url = `https://rickandmortyapi.com/api/character`

        await fetch(url)
            .then(response => response.json())
            .then((data: ApiResponse) => {
                setCharacters(data)
                setTotalPages(data.info.pages)
                setLoading(false)
            }).catch((err) => {
                console.log(err)
                setLoading(false)
            })
    };

    const handleNewCharacterPage = async (page: number) => {
        const pageNumber = page + 1;

        const res = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
        );
        const newCharacterPageList = await res.json();

        setCharacters(newCharacterPageList);
    };

    useEffect(() => {
        searchCharacters();
    }, []);

    return (
        <LayoutPage>
            <section className="h-full w-full flex justify-center items-center flex-wrap gap-5 py-20 px-0">
                {characters?.results && (
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