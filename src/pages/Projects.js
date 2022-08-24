import { useFetch } from "../hooks/useFetch"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function Projects() {
    const { data: repositories, isLoading } = useFetch("https://api.github.com/users/Muvias/repos");

    return (
        <div className="flex flex-col w-[100%] min-h-[100vh] p-[100px]">
            <div className="text-center text-[#333]">
                <h2 className="relative text-[1.8em] tracking-[1px] font-bold before:absolute before:content-[''] before:w-[60px] before:h-[4px] before:left-[50%] before:bottom-[-10px] before:translate-x-[-50%] before:bg-[#fec63e]">
                    Projetos
                </h2>

                <p className="mt-[20px] text-[1.1em]">Visitando meu Github você verá as menções para cada projeto e de onde eles vieram.</p>
            </div>

            <div className="m-auto">

                {isLoading && <p>Carregando...</p>}
                <Carousel selectedItem={16} infiniteLoop={true} width={"40rem"} showThumbs={false}>
                    {repositories?.map(repo => (
                        <a  key={repo.id} href={repo.html_url} alt="Repositório" target="_blank" rel="noreferrer"  className="flex justify-center items-center text-[1.8rem] font-bold bg-black text-white hover:bg-[#fec63e] hover:text-[#333] transition-colors h-[15rem]">
                            <div>
                                <p>{repo.name}</p>
                                <p className="text-[1rem] font-sm">{repo.description}</p>
                            </div>
                        </a>
                    ))}
                </Carousel>

                <p className="mt-[5px] text-center text-[1.1em] font-thin">Cada card leva diretamente para o seu respectivo repositório.</p>
            </div>
        </div>
    )
};