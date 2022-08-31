
export function Footer() {
    return (
        <div className="flex flex-col w-[100%] min-h-[40vh] p-[30px] sm:p-[40px] lg:p-[60px] xl:p-[100px] bg-black justify-center items-center">
            <div className="text-center text-[#fff]" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="relative text-[1.8em] tracking-[1px] font-bold before:absolute before:content-[''] before:w-[60px] before:h-[4px] before:left-[50%] before:bottom-[-10px] before:translate-x-[-50%] before:bg-[#fcbb25]">
                    Contatos
                </h2>
                <p className="my-[20px] text-[1.1em]">Para falar comigo você pode me chamar em qualquer rede social, email ou via WhatsApp 😉.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-flow-col gap-1 text-white" data-aos="fade-up" data-aos-duration="1000">
                <a
                    href="https://api.whatsapp.com/send?phone=+5513997546800&text=Olá, vi o seu site e gostaria de conversar com você."
                    target="_blank"
                    rel="noreferrer"
                    className="py-[10px] px-[30px] bg-[#fcbb25] tracking-[2px] font-medium hover:bg-[#fec63e] hover:-translate-y-0 transition-colors"
                >
                        WhatsApp
                </a>

                <a
                    href="https://www.instagram.com/perazzamrb/"
                    target="_blank"
                    rel="noreferrer"
                    className="py-[10px] px-[30px] bg-[#fcbb25] tracking-[2px] font-medium hover:bg-[#fec63e] transition-colors"
                >
                        Instagram
                </a>

                <a
                    href="https://www.linkedin.com/in/vinicius-perazza-martins/"
                    target="_blank"
                    rel="noreferrer"
                    className="py-[10px] px-[30px] bg-[#fcbb25] tracking-[2px] font-medium hover:bg-[#fec63e] transition-colors"
                >
                    Linkedin
                </a>

                <a
                    href="https://github.com/Muvias"
                    target="_blank"
                    rel="noreferrer"
                    className="py-[10px] px-[30px] bg-[#fcbb25] tracking-[2px] font-medium hover:bg-[#fec63e] transition-colors"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};