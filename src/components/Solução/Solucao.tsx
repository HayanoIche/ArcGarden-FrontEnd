
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

            <section>
                <div>
                    <h2>
                        exemplo da UI do app
                    </h2>
                    
                    <img src="src/assets/solução/ui.png" alt="" id="ui" />
                </div>

                <div>
                    <h2>
                        Fluxo da gameplay
                    </h2>
                    
                    <img src="src/assets/solução/fluxo.png" alt="" id="fluxo"/>
                </div>
            </section>
        </div>
    );
}