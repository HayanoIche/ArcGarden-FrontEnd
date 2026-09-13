export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 pt-12 pb-12 lg:pt-28 lg:pb-32 px-6 text-center">
      <img
        src="src/assets/home/girassol.png"
        alt=""
        className="w-40 hidden lg:block"
      />

      <div className="flex flex-col items-center">
        <h2 className="flex flex-col items-center font-bold text-[var(--g4)] text-[3rem] lg:text-[5rem] leading-tight">
          Seu jardim virtual,{' '}
          <em
  style={{ fontFamily: 'var(--font-spectral)' }}
  className="italic text-[var(--g3)]"
>
  impacto real
</em>
        </h2>
        <p className="font-bold text-[var(--text-main)] pt-4 lg:pt-12 text-[1.2rem] lg:text-[1.75rem] max-w-[40rem]">
          Faça missões sustentáveis no dia a dia, cuide do seu jardim virtual
          e concorra a ter sua conta de energia paga.
        </p>
      </div>

      <img
        src="src/assets/home/cacto.png"
        alt=""
        className="w-40 hidden lg:block"
      />
    </section>
  );
}