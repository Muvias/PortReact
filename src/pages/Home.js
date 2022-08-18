export function Home() {
    return (
        <div className="relative w-[100%] min-h-[100vh]">
            <div className="absolute w-[500px] h-[100vh]">
                <img
                    src="https://avatars.githubusercontent.com/u/52111824?v=4"
                    alt="Minha foto"
                    className="w-[100%] h-[100%] object-cover absolute"
                />
            </div>

            <div className="flex justify-center items-center absolute  right-0 p-[100px] h-[100%] w-[calc(100%-500px)]">
                <h1 className="absolute top-[40px] left-[100px] px-[5px] text-[1.2em] font-bold bg-[#333] text-white">VP_PORFOLIO</h1>

                <div>
                    <h2 className="text-[1.5em] text-[#333]"><span className="text-[#fec63e] font-bold text-[1.5em]">Olá</span>, me chamo</h2>
                    <span className="text-[3em] text-[#333] font-bold">Vinicius Perazza Martins.</span>
                    <p className="text-[1.5em] text-[#333]">Sou um desenvolvedor iniciante, por enquanto mais familiarizado com o Front-end.</p>
                    <p className="my-[20px] text-[1.1em]">Seja bem-vindo ao meu site, aqui você encontrará um pouco sobre quem eu sou, o que eu faço e como entrar em contato comigo. Espero que tenha uma experiência agradável. Caso tenha sugestões não exite em entrar em contato comigo via redes-sociais ou WhatsApp.</p>
                    
                    <button className="inline-block py-[10px] px-[30px] bg-[#fec63e] text-[#fff] font-medium tracking-[2px] hover:bg-[#fcbb25]">Sobre mim</button>
                </div>

            </div>
        </div>
    );
};