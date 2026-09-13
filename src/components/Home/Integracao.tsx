const cards = [
  { title: 'Pontos', text: 'Troque seus pontos por benefícios reais.' },
  { title: 'Energia', text: 'Descontos reais na conta de energia.' },
  { title: 'Impacto', text: 'Contribua com o meio ambiente.' },
];

export default function Integracao() {
  return (
    <section className="w-full bg-[var(--bg-main)] flex flex-col items-center justify-center py-6 px-6">
      <h2 className="font-bold text-[var(--text-bold)] text-2xl lg:text-4xl py-8 text-center">
        - INTEGRAÇÃO COM SOUL UP -
      </h2>

      <div className="flex flex-row flex-wrap justify-center gap-3 lg:gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-center justify-center w-[calc(33.33%-0.5rem)] lg:w-60 min-h-32 p-3 lg:p-6 border-[0.25rem] border-[var(--g4)] rounded-2xl lg:rounded-[2rem] text-center"
          >
            <h3 className="font-bold text-[var(--g4)] text-base lg:text-lg pb-2 lg:pb-4">
              - {card.title} -
            </h3>
            <p className="font-bold text-[var(--g2)] text-sm lg:text-base leading-relaxed max-w-[14rem]">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}