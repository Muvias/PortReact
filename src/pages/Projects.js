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

            <div className="grid grid-cols-3 gap-4 w-[100rem] h-[100rem]"
>
                {isLoading && <p>Carregando...</p>}

                {repositories?.map(repo => (
                    <div key={repo.id} className="flex justify-center items-center text-[1.8rem] font-bold bg-black text-white hover:bg-[#fec63e] hover:text-[#333] transition-colors">
                        <a href={repo.html_url} alt="Repositório" target="_blank" rel="noreferrer">
                            {repo.name}
                        </a>
                    </div>
                ))}

            </div>
        </div>
    )
};