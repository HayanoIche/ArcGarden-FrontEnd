export default function Solucao()
{
    return (
        <div className="flex flex-col items-center w-full">
            <section className="flex flex-col items-center py-18 px-8 md:py-18 md:px-6 w-full box-border">
                <span className="bg-[var(--g1)] text-[var(--g4)] text-[0.85rem] font-bold py-1 px-4 rounded-full mb-4">
                    Conheça o projeto
                </span>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-bold)] text-center mb-2">
                    Como é o <em className="font-['Spectral',serif] italic text-[var(--g3)]">Arcgarden</em>
                </h2>
                
                <p className="text-base text-[var(--text-main)] max-w-[40rem] mb-10">
                    UI do aplicativo
                </p>
            </section>

            <section className="flex flex-col items-center md:flex-row gap-10 pb-20">
                <div className="flex flex-col items-center gap-8">
                    <h2 className="text-2xl font-bold text-[var(--text-main)] text-center">
                        Exemplo da UI do app
                    </h2>
                    
                    <img
                        src="src/assets/solução/ui.png"
                        alt="Exemplo da interface do usuário do aplicativo"
                        className="w-full max-w-[25rem] h-auto object-contain"
                    />
                </div>

                <div className="flex flex-col items-center gap-8 py-25">
                    <h2 className="text-2xl font-bold text-[var(--text-main)] text-center">
                        Fluxo da gameplay
                    </h2>
                    
                    <img
                        src="src/assets/solução/fluxo.png"
                        alt="Fluxo de funcionamento da gameplay"
                        className="w-full max-w-[35rem] md:max-w-[50rem] h-auto object-contain"
                    />
                </div>
            </section>
        </div>
    );
}