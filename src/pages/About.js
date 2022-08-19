export function About() {
    return (
        <div className="flex flex-col w-[100%] min-h-[100vh] p-[100px] bg-black">
            <div className="text-center text-[#fff]">
                <h2 className="relative text-[1.8em] tracking-[1px] font-bold before:absolute before:content-[''] before:w-[60px] before:h-[4px] before:left-[50%] before:bottom-[-10px] before:translate-x-[-50%] before:bg-[#fec63e]">Sobre mim</h2>
                <p className="my-[20px] text-[1.1em]">Programador Front-End de São Paulo.</p>
            </div>

            <div className="flex justify-between mt-[40px]">
                <div className="text-center text-[#fff] min-w-[49%] w-[49%]">
                    <p className="my-[20px] text-[1.1em] text-left">
                        Tenho 23 anos e sou formado no Colégio Objetivo de Guarujá, aonde morei a minha vida inteira até metade de 2020, foi quando me mudei para São Paulo com meus pais em busca de melhores oportunidades de vida. <br /> <br />
                        As coisas que você encontrará aqui serão apenas um pouco de quem eu sou, mas espero que seja o suficiente para que instigue alguém a querer me conhecer melhor, me dar uma oportunidade e ver até aonde eu posso ir. <br /> <br />
                        Sempre fui fascinado por tecnologia e após me mudar tive a oportunidade de começar a estudar sobre isso, aonde realmente me vi tendo um futuro de verdade e que fosse próspero o bastante para me sustentar e futuramente também uma família. <br /> <br />
                        Constantemente ouvi dizerem que a carreira de programador é "coisa de maluco", por conta disso me tornei muito receoso em ir atrás, mas após começar neste mundo finalmente me senti confortável fazendo algo que pudesse ser o meu trabalho, e aqui estou, tentando ingressar no mercado como um iniciante, querendo adquirir experiência e construir a minha carreira.
                    </p>
                </div>

                <div className="ml-[40px]">
                    <img
                        src="https://muvias.github.io/Portfolio/images/deitada.jpeg"
                        alt="Minha foto"
                        className="max-w-[100%]"
                    />
                </div>
            </div>
        </div>
    );
};