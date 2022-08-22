import { useFetch } from "../hooks/useFetch"

export function Projects() {
    const { data: repositories, isLoading } = useFetch("https://api.github.com/users/Muvias/repos");

    return (
        <div className="flex flex-col w-[100%] min-h-[100vh] p-[100px]">
            <div className="text-center text-[#333]">
                <h2 className="relative text-[1.8em] tracking-[1px] font-bold before:absolute before:content-[''] before:w-[60px] before:h-[4px] before:left-[50%] before:bottom-[-10px] before:translate-x-[-50%] before:bg-[#fec63e]">
                    Projetos
                </h2>

                <p className="my-[20px] text-[1.1em]">Visitando meu Github você verá as menções para cada projeto e de onde eles vieram.</p>
            </div>

            <div>
                {isLoading && <p>Carregando...</p>}
                <ul>
                    {repositories?.map(repo => (
                        <li key={repo.id}>{repo.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};