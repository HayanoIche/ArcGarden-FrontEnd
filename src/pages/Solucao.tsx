import { useState } from 'react';
import uiImg from '../assets/solução/ui.png';
import fluxoImg from '../assets/solução/fluxo.png';

const LIMITE_MISSOES = 3;
const AGUA_POR_MISSAO = 20;
const CUSTO_PACOTE = 15;
const AGUA_POR_PACOTE = 8;
const CUSTO_REGAR = 15;

export default function Solucao()
{
    const [agua, setAgua] = useState(0);
    const [missoesReclamadas, setMissoesReclamadas] = useState(0);
    const [pacotesUsados, setPacotesUsados] = useState(0);
    const [regas, setRegas] = useState(0);

    function reclamarMissao() {
        if (missoesReclamadas >= LIMITE_MISSOES) return;

        setMissoesReclamadas((quantidade) => quantidade + 1);
        setAgua((quantidade) => quantidade + AGUA_POR_MISSAO);
    }

    function comprarEUsarPacote() {
        if (agua < CUSTO_PACOTE) return;

        setAgua((quantidade) => quantidade - CUSTO_PACOTE + AGUA_POR_PACOTE);
        setPacotesUsados((quantidade) => quantidade + 1);
    }

    function regarPlanta() {
        if (agua < CUSTO_REGAR) return;

        setAgua((quantidade) => quantidade - CUSTO_REGAR);
        setRegas((quantidade) => quantidade + 1);
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
                    <div
                        className="relative w-full max-w-xs overflow-hidden rounded-2xl border-2 border-[var(--g1)] shadow-lg"
                        style={{ aspectRatio: '1 / 2' }}
                    >
                        <img
                            src={uiImg}
                            alt="Jogo do Arcgarden com uma planta, botão para regar e botão de pacote"
                            className="absolute inset-0 h-full w-full object-fill"
                        />

                        <output
                            aria-label={`Pontos de água no jogo: ${agua}`}
                            className="absolute right-[5%] top-[3%] flex h-[6%] w-[18%] items-center justify-center bg-[#294d25] font-mono text-lg font-bold leading-none text-[#b8d295]"
                        >
                            {agua}
                        </output>

                        <button
                            type="button"
                            onClick={regarPlanta}
                            disabled={agua < CUSTO_REGAR}
                            aria-label={`Regar planta; custa ${CUSTO_REGAR} pontos de água`}
                            title={`Regar planta (-${CUSTO_REGAR} pontos de água)`}
                            className="absolute bottom-[1%] left-0 h-[13%] w-[64%] cursor-pointer rounded-bl-2xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-yellow-300 disabled:cursor-not-allowed"
                        />

                        <button
                            type="button"
                            onClick={comprarEUsarPacote}
                            disabled={agua < CUSTO_PACOTE}
                            aria-label={`Comprar e usar um pacote; custa ${CUSTO_PACOTE} pontos e devolve ${AGUA_POR_PACOTE}`}
                            title={`Usar pacote (-${CUSTO_PACOTE}, +${AGUA_POR_PACOTE} pontos de água)`}
                            className="absolute bottom-[1%] right-[1%] h-[13%] w-[23%] cursor-pointer rounded-br-2xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-6px] focus-visible:outline-yellow-300 disabled:cursor-not-allowed"
                        />
                    </div>
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