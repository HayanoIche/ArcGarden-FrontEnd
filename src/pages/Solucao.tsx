import { useState } from 'react';
import uiImg from '../assets/solução/ui.png';
import fluxoImg from '../assets/solução/fluxo.png';

const LIMITE_MISSOES = 3;
const AGUA_POR_MISSAO = 20;

export default function Solucao()
{
    const [agua, setAgua] = useState(0);
    const [missoesReclamadas, setMissoesReclamadas] = useState(0);
    const [pacotesUsados] = useState(0);
    const [regas] = useState(0);

    function reclamarMissao() {
        if (missoesReclamadas >= LIMITE_MISSOES) return;

        setMissoesReclamadas((quantidade) => quantidade + 1);
        setAgua((quantidade) => quantidade + AGUA_POR_MISSAO);
    }

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
                        <p className="text-sm text-[var(--text-main)]">Pontos de água: {agua}</p>
                        <p className="text-sm text-[var(--text-main)]">Pacotes usados: {pacotesUsados}</p>
                        <p className="text-sm text-[var(--text-main)]">Regas realizadas: {regas}</p>
                    </section>

                    <section className="rounded-lg border border-[var(--g1)] bg-white px-4 py-3">
                        <p className="text-sm font-bold text-[var(--text-bold)]">
                            Missões reclamadas: {missoesReclamadas}/3
                        </p>
                        <button type="button" onClick={reclamarMissao} disabled={missoesReclamadas >= LIMITE_MISSOES}
                            className="mt-3 rounded-md bg-[var(--g4)] px-4 py-2 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50">
                            {missoesReclamadas >= LIMITE_MISSOES
                                ? 'Limite atingido'
                                : `Reclamar missão (+${AGUA_POR_MISSAO})`}
                        </button>
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