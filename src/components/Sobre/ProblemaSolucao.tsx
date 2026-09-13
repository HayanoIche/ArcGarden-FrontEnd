import InfoCard from '../ui/InfoCard';

export default function ProblemaSolucao() {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full max-w-sm md:max-w-4xl mx-auto mt-12">
      <InfoCard
        title="⚠️ O problema"
        text="O consumo energético doméstico cresce a cada ano, mas falta incentivo concreto para que as pessoas adotem hábitos sustentáveis. Apps de sustentabilidade existem, mas são pouco atrativos, burocráticos e não geram engajamento contínuo."
        className="flex-1 bg-[var(--g4)] rounded-3xl p-7 flex flex-col gap-3"
        titleClassName="font-bold text-[var(--bg-main)] text-2xl flex items-center gap-2"
        textClassName="font-bold text-[var(--g1)] text-sm"
      />

      <InfoCard
        title="💡 A solução"
        text="O Arcgarden gamifica a sustentabilidade. Os usuários cumprem missões diárias gravando vídeos validados por IA e recebem recompensas como Água para evoluir seu jardim e SoulPoints que geram benefícios reais. Os melhores do ranking ganham desconto na conta de energia."
        className="flex-1 bg-[var(--g3)] rounded-3xl p-7 flex flex-col gap-3"
        titleClassName="font-bold text-[var(--bg-main)] text-2xl flex items-center gap-2"
        textClassName="font-bold text-[var(--g1)] text-sm"
      />
    </div>
  );
}