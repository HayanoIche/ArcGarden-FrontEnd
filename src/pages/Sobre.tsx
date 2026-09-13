export default function Sobre() {
  return (
    <div className="flex flex-col items-center py-16 px-6 w-full">
      
      <div className="flex flex-col items-center text-center">
        <span className="bg-[var(--g1)] text-[var(--g4)] text-sm font-bold px-4 py-1 rounded-full mb-4">
          Sobre o projeto
        </span>

        <h2 className="font-bold text-[var(--text-bold)] text-5xl lg:text-5xl mb-2">
          O que é o{' '}
          <em
            style={{ fontFamily: 'var(--font-spectral)' }}
            className="italic text-[var(--g3)]"
          >
            Arcgarden
          </em>
        </h2>

        <p className="font-bold text-[var(--text-main)] mt-3 max-w-lg">
          Uma solução gamificada que transforma ações sustentáveis do dia a dia
          em um jardim virtual dentro da Soul Up
        </p>
      </div>

    </div>
  );
}