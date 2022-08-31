import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useFetch } from "../hooks/useFetch"
import { Carousel } from 'react-responsive-carousel';

export function Projects() {
    const { data: repositories, isLoading } = useFetch("https://api.github.com/users/Muvias/repos");

    return (
        <div className="flex flex-col p-[30px] w-[100%] min-h-[100vh] sm:p-[40px] lg:p-[60px] xl:p-[100px] overflow-hidden">
            <div className="text-center text-[#333]" data-aos="fade-down" data-aos-duration="1000">
                <h2 className="relative text-[1.8em] tracking-[1px] font-bold before:absolute before:content-[''] before:w-[60px] before:h-[4px] before:left-[50%] before:bottom-[-10px] before:translate-x-[-50%] before:bg-[#fcbb25]">
                    Projetos
                </h2>

                <p className="mt-[20px] text-[1.1em]">Visitando meu Github você verá as menções para cada projeto e de onde eles vieram.</p>
            </div>

            <div className="m-auto w-[100%] lg:w-[40rem]" data-aos="fade-up" data-aos-duration="1000">

                {isLoading && <p>Carregando...</p>}
                <Carousel selectedItem={16} infiniteLoop={true} showThumbs={false}>
                    {repositories?.map(repo => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            alt="Repositório"
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-center items-center h-[15rem] text-[1.8rem] font-bold bg-[#222] text-white hover:bg-[#fec63e] hover:text-[#333] transition-colors"
                        >
                            <div>
                                <p className="text-[2rem]">{repo.name}</p>
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