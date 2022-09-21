import Typewriter from 'typewriter-effect';

import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import instagram from "../assets/instagram.svg"

import perfil from "../assets/perfil.jpg"

export function Home() {
    return (
        <div className="flex w-[100%] min-h-[100vh] lg:relative">
            <div className="hidden lg:inline-block lg:absolute lg:w-[450px] xl:w-[500px] lg:h-[100vh]">
                <img
                    src={perfil}
                    alt="Minha foto"
                    className="h-[100%] object-cover absolute"
                    data-aos="fade-left" data-aos-duration="2000"
                />
            </div>

             <div className="flex flex-col justify-center p-[30px] lg:items-center lg:absolute lg:right-0 sm:p-[40px] lg:p-[60px] xl:p-[80px] lg:h-[100%] lg:w-[calc(100%-450px)] xl:w-[calc(100%-500px)]"  data-aos="fade-left" data-aos-duration="2000">
                <h1 className="absolute top-[30px] py-[2px] px-[5px] text-[1.2em] tracking-[1px] font-bold bg-[#333] text-white lg:top-[40px] lg:left-[60px] xl:left-[100px] lg:px-[5px]">VP_PORFOLIO</h1>

                <div>
                    <h2 className="text-[1.3em] text-[#333] lg:text-[1.5em]"><span className="text-[#fcbb25] font-bold text-[1.3em]">Olá</span>, me chamo</h2>
                    <span className="text-[1.8em] text-[#333] font-bold lg:text-[3em]">Vinicius Perazza Martins.</span>
                    <div className="sm:flex sm:gap-2 text-[1.3em] text-[#333] lg:text-[1.5em]">
                        {<Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(1500)
                                    .typeString('Sou desenvolvedor Front-End.')
                                    .start()
                            }}
                            options={{
                                delay: 90,
                            }}
                        />}
                    </div>
                    <p className="text-[1.1em] my-2 lg:my-[20px]">Seja bem-vindo ao meu site, aqui você encontrará um pouco sobre o que eu faço e como entrar em contato comigo. Espero que tenha uma experiência agradável. Caso tenha sugestões não hesite em entrar em contato comigo via redes-sociais ou WhatsApp.</p>
                    
                    <a href="#about" className="inline-block py-[10px] px-[20px] my-2 bg-[#fcbb25] text-[#fff] font-medium tracking-[2px] hover:bg-[#fec63e]">Sobre mim</a>
                </div>

                <ul className="absolute flex gap-3 bottom-[30px] lg:left-[60px] xl:left-[100px] lg:bottom-[20px]">

                    <li>
                        <a href="https://github.com/Muvias" target="_blank" rel="noreferrer">
                            <img className="w-[1.875rem] opacity-[0.7] hover:opacity-[1] hover:-translate-y-[2px] transition-opacity" src={github} alt="Github"/>
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://www.linkedin.com/in/vinicius-perazza-martins/" target="_blank" rel="noreferrer">
                            <img className="w-[1.875rem] opacity-[0.7] hover:opacity-[1] hover:-translate-y-[2px] transition-opacity" src={linkedin} alt="Github"/>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/perazzamrb/" target="_blank" rel="noreferrer">
                            <img className="w-[1.875rem] opacity-[0.7] hover:opacity-[1] hover:-translate-y-[2px] transition-opacity" src={instagram} alt="Github"/>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    );
};