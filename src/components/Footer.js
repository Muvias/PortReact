
export function Footer() {
    return (
        <div className="flex flex-col w-[100%] min-h-[40vh] p-[100px] bg-black justify-center items-center">
            <div className="text-center text-[#fff]">
                <h2 className="relative text-[1.8em] tracking-[1px] font-bold before:absolute before:content-[''] before:w-[60px] before:h-[4px] before:left-[50%] before:bottom-[-10px] before:translate-x-[-50%] before:bg-[#fec63e]">
                    Contatos
                </h2>
                <p className="my-[20px] text-[1.1em]">Para falar comigo você pode me chamar em qualquer rede social, email ou via WhatsApp 😉.</p>
            </div>

            <div className="flex gap-1 text-white">
                <a
                    href="https://api.whatsapp.com/send?phone=+5513997546800&text=Olá, vi o seu site e gostaria de conversar com você."
                    target="_blank"
                    rel="noreferrer"
                    className="py-[10px] px-[30px] bg-[#fec63e] tracking-[2px] font-medium hover:bg-[#fcbb25] hover:-translate-y-0 transition-colors"
                >
                        WhatsApp
                </a>

                <a
                    href="https://www.instagram.com/perazzamrb/"
                    target="_blank"
                    rel="noreferrer"
                    className="py-[10px] px-[30px] bg-[#fec63e] tracking-[2px] font-medium hover:bg-[#fcbb25] transition-colors"
                >
                        Instagram
                </a>

                <a
                    href="https://www.linkedin.com/in/vinicius-perazza-martins/"
                    target="_blank"
                    rel="noreferrer"
                    className="py-[10px] px-[30px] bg-[#fec63e] tracking-[2px] font-medium hover:bg-[#fcbb25] transition-colors"
                >
                    Linkedin
                </a>

                <a
                    href="https://github.com/Muvias"
                    target="_blank"
                    rel="noreferrer"
                    className="py-[10px] px-[30px] bg-[#fec63e] tracking-[2px] font-medium hover:bg-[#fcbb25] transition-colors"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};