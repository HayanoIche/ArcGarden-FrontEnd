export default function RankingSection() {
  return (
    <section className="w-full bg-[var(--g4)] flex flex-col items-center justify-center px-6">

      <h2 className="font-bold text-[var(--bg-main)] text-2xl lg:text-4xl py-8 text-center">
        - RANKING MENSAL -
      </h2>

      <ul className="flex flex-wrap lg:flex-nowrap justify-center gap-3 lg:gap-8 w-full lg:w-auto items-center pb-8 list-none">

        {/* 1º lugar */}
        <li className="w-full lg:w-80 lg:order-2">
          <div className="bg-[var(--bg-main)] text-[var(--g6)] flex flex-col items-center justify-center w-full min-h-[9rem] rounded-2xl text-center px-4 py-4 font-bold">
            
            <span className="text-[var(--g3)] text-2xl">
              🥇 1º lugar
            </span>

            <p className="text-[var(--g5)]">
              <span className="text-xl mt-4 underline">100%</span>
              <br />
              de desconto da <br />
              conta de energia
            </p>

          </div>
        </li>

        {/* 2º lugar */}
        <li className="w-[calc(50%-0.5rem)] lg:w-64 lg:order-1">
          <div className="bg-[var(--g5)] text-[var(--g6)] flex flex-col items-center justify-center w-full min-h-[7rem] rounded-2xl text-center px-4 py-4 font-bold">
            
            <span className="text-[var(--g2)] text-base">
              🥈 2º lugar
            </span>

            <p>
              50% de desconto da conta de energia
            </p>

          </div>
        </li>

        {/* 3º lugar */}
        <li className="w-[calc(50%-0.5rem)] lg:w-64 lg:order-3">
          <div className="bg-[var(--g5)] text-[var(--g6)] flex flex-col items-center justify-center w-full min-h-[7rem] rounded-2xl text-center px-4 py-4 font-bold">
            
            <span className="text-[var(--g2)] text-base">
              🥉 3º lugar
            </span>

            <p>
              25% de desconto da conta de energia
            </p>

          </div>
        </li>

      </ul>

    </section>
  );
}