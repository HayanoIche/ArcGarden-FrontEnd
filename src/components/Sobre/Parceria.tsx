export default function Parceria() {
  return (
    <div className="w-full max-w-5xl bg-[var(--g1)] border-[0.2rem] border-[var(--g3)] rounded-3xl p-8 mt-12">
      <h3 className="font-bold text-[var(--text-bold)] text-xl mb-4">
        Parceria com a{' '}
        <em
          style={{ fontFamily: 'var(--font-spectral)' }}
          className="italic text-3xl text-[var(--g3)]"
        >
          Soul Up
        </em>
      </h3>
      <p className="font-bold text-[var(--text-main)]">
        A Soul Up é um ecossistema digital focado em sustentabilidade, no qual
        o Arcgarden atua como uma funcionalidade de gamificação integrada.
        Nele, os pontos conquistados ao longo do jogo podem ser convertidos em
        benefícios reais, como descontos na conta de energia elétrica por meio
        do Vale Energia. A cada missão completada, o usuário contribui com os
        Objetivos de Desenvolvimento Sustentável (ODS) da ONU.
      </p>
    </div>
  );
}