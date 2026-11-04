import uiImg from '../assets/solução/ui.png';
import fluxoImg from '../assets/solução/fluxo.png';

export default function Solucao()
{
    return (
        <div className="flex flex-col items-center w-full">
            <section className="flex flex-col items-center w-full box-border px-6 pt-20 pb-14 text-center">
                <span className="bg-[var(--g1)] text-[var(--g4)] text-[0.85rem] font-bold py-1 px-4 rounded-full mb-4">
                    Conheça o projeto
                </span>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-bold)] text-center mb-2">
                    Como é o <em className="font-spectral italic text-[var(--g3)]">Arcgarden</em>
                </h2>
                
                <p className="text-base text-[var(--text-main)] max-w-[40rem] mb-10">
                    UI do aplicativo
                </p>
            </section>

            <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 px-6 pb-24 sm:grid-cols-2">
                <div className="flex justify-center">
                    <img
                        src={uiImg}
                        alt="Exemplo da interface do jogo com uma planta"
                        className="h-auto w-full max-w-xs object-contain"
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <section className="rounded-lg border border-[var(--g1)] bg-white px-4 py-3">
                        <p className="text-sm text-[var(--text-main)]">Pontos de água: 0</p>
                        <p className="text-sm text-[var(--text-main)]">Pacotes usados: 0</p>
                        <p className="text-sm text-[var(--text-main)]">Regas realizadas: 0</p>
                    </section>

                    <section className="rounded-lg border border-[var(--g1)] bg-white px-4 py-3">
                        <p className="text-sm font-bold text-[var(--text-bold)]">
                            Missões reclamadas: 0/3
                        </p>
                    </section>

                    <section className="rounded-lg border border-[var(--g1)] bg-white p-4">
                        <h2 className="mb-3 text-lg font-bold text-[var(--text-bold)]">
                            Fluxo da gameplay
                        </h2>
                        <img
                            src={fluxoImg}
                            alt="Fluxo de funcionamento da gameplay"
                            className="h-auto w-full object-contain"
                        />
                    </section>
                </div>
            </section>
        </div>
    );
}