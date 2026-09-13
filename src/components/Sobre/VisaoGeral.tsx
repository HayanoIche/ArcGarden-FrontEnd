import InfoCard from '../ui/InfoCard';

const items = [
  { title: 'Plataforma', text: 'Feature integrada ao app Soul Up' },
  { title: 'IA Iris', text: 'Valida vídeos com score 0-100%' },
  { title: 'Economia', text: 'Água (in-game) + SoulPoints (benefícios reais)' },
  { title: 'Impacto', text: 'Energia subsidiada para os melhores' },
];

export default function VisaoGeral() {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mt-16">
      <h2 className="font-bold text-[var(--text-bold)] text-2xl lg:text-3xl mb-8 text-center">
        Visão geral
      </h2>

      <div className="flex flex-row flex-wrap justify-center gap-3 lg:gap-4 w-full">
        {items.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            text={item.text}
            className="flex flex-col items-center justify-center text-center bg-[var(--g1)] rounded-xl p-4 w-[calc(50%-0.5rem)] lg:w-52"
            titleClassName="font-bold text-[var(--text-bold)] text-sm"
            textClassName="font-bold text-[var(--text-main)] text-xs"
          />
        ))}
      </div>
    </div>
  );
}