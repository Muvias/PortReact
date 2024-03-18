import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useFetch } from "../hooks/useFetch"
import { Carousel } from 'react-responsive-carousel';

import { Github, ArrowUpRight } from 'lucide-react'

export function Projects() {
    const { data: repositories, isLoading } = useFetch("https://api.github.com/users/Muvias/repos");

    const projectsToExclude = [
        'Muvias',
        'Elixir',
        'FeedbackWidgetBackEnd',
        'consumingAPI',
        'HeatDoWhile',
        'nlwValoriza',
        'docuraDaFada',
        'firstContactReactJS',
        'teste-front-end-jr',
        'blog'
    ]

    return (
        <div className="flex flex-col p-[30px] w-[100%] min-h-screen sm:p-[40px] lg:p-[60px] xl:p-[80px] overflow-hidden">
            <div className="text-center text-[#333]" data-aos="fade-down" data-aos-duration="1000">
                <h2 className="relative text-[1.8em] tracking-[1px] font-bold before:absolute before:content-[''] before:w-[60px] before:h-[4px] before:left-[50%] before:bottom-[-10px] before:translate-x-[-50%] before:bg-[#fcbb25]">
                    Projetos
                </h2>

                <p className="mt-[20px] text-[1.1em]">Visitando meu Github você verá as menções para cada projeto e de onde eles vieram.</p>
            </div>

            <div className="m-auto w-full md:w-[40rem] lg:w-[45rem] xl:w-[60rem]" data-aos="fade-up" data-aos-duration="1000">

                {isLoading && <p>Carregando...</p>}
                <Carousel selectedItem={9} infiniteLoop={true} showThumbs={false} showStatus={false}>
                    {repositories?.filter((repo) => !projectsToExclude.includes(repo.name)).map(repo => (
                        <div
                            key={repo.id}
                            alt="Repositório"
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-center items-center aspect-video text-[1.8rem] font-bold bg-[#222]"
                            id="projectsContainer"
                        >
                            <div className="flex flex-col items-center w-[80%]" id="text">
                                <p className="text-[1.3rem] sm:text-[2rem] text-[#fcbb25]">{repo.name}</p>
                                <p className="text-[1rem] sm:text-[1.3rem] font-extralight text-[#fcbb25]">{repo.description}</p>

                                <div className="flex gap-2 mt-4">
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-4 rounded-sm hover:bg-zinc-700 transition-colors"
                                    >
                                        <Github
                                            className="w-8 h-8 text-[#fcbb25]"
                                        />
                                    </a>
                                    {repo.homepage && (
                                        <a
                                            href={repo.homepage}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-4 rounded-sm hover:bg-zinc-700 transition-colors"
                                        >
                                            <ArrowUpRight
                                                className="w-8 h-8 text-[#fcbb25]"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <img
                                className="absolute max-w-[93%] opacity-0 sm:opacity-100 sm:h-[20rem] md:h-[25rem] lg:h-[28rem] xl:h-[33rem] object-cover transition-opacity"
                                src={`https://raw.githubusercontent.com/Muvias/${repo.name}/main/.github/preview.png`}
                                alt="Imagem de preview do projeto"
                                id="image"
                            />

                        </div>
                    ))}
                </Carousel>

                <p className="mt-[5px] text-center text-[1.1em] font-extralight">Cada card leva diretamente para o seu respectivo repositório.</p>
            </div>
        </div>
    )
};