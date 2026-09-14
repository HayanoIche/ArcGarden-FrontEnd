import fotoFranco from '../assets/integrantes/franco.jpeg';
import fotoIgor from '../assets/integrantes/igor.jpeg';
import fotoSam from '../assets/integrantes/sam.jpeg';
import fotoMarcela from '../assets/integrantes/marcela.jpeg';
import fotoMatheus from '../assets/integrantes/matheus.jpeg';

const integrantes = [
  {
    nome: "Franco Jared Marquina Blas",
    rm: "572901",
    turma: "1TDSPK",
    foto: fotoFranco,
    linkedin: "https://www.linkedin.com/in/franco-jared-marquina-blas-b67851303/",
    github: "https://github.com/Fmarquina",
  },
  {
    nome: "Igor Mateus da Silva",
    rm: "571751",
    turma: "1TDSPK",
    foto: fotoIgor,
    linkedin: "https://www.linkedin.com/in/igor-mateus-da-silva-4b05013ba/",
    github: "https://github.com/HayanoIche",
  },
  {
    nome: "Sam Giulian Altoe",
    rm: "570332",
    turma: "1TDSPK",
    foto: fotoSam,
    linkedin: "https://www.linkedin.com/in/sam-giulian-altoe-758a733b2/",
    github: "https://github.com/Sammer-07",
  },
  {
    nome: "Marcela Batista Teixeira",
    rm: "574069",
    turma: "1TDSPK",
    foto: fotoMarcela,
    linkedin: "https://www.linkedin.com/in/marcelabteixeira/",
    github: "https://github.com/wonbindasilva",
  },
  {
    nome: "Matheus Pereira Vidal",
    rm: "573327",
    turma: "1TDSPK",
    foto: fotoMatheus,
    linkedin: "https://linkedin.com/in/matheus-pereira-8700893b3",
    github: "https://github.com/pereirinh44",
  },
];

export default function Integrantes()
{
    return (
        <div className="w-full flex flex-col items-center py-16 px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-bold)] text-center mb-2">
                Nossa equipe
            </h2>
            <p className="text-base text-[var(--text-main)] text-center mb-12">
                Conheça os integrantes do Arcgarden
            </p>

            <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {integrantes.map((membro) => (
          <div
            key={membro.rm}
            className="bg-[var(--g1)] border-[0.5rem] border-[var(--g4)] rounded-2xl p-6 flex flex-col items-center w-full sm:w-72 shadow-sm transition-transform hover:-translate-y-1"
          >
            <img
              src={membro.foto}
              alt={`Foto de ${membro.nome}`}
              className="w-36 h-36 rounded-full object-cover border-[.4rem] border-[var(--g4)] mb-4"
            />

            <h3 className="text-xl font-bold text-[var(--text-bold)] text-center mb-2">
              {membro.nome}
            </h3>
            <p className="text-sm text-[var(--text-main)] mb-1">
              <strong className="text-[var(--text-bold)]">RM:</strong> {membro.rm}
            </p>
            <p className="text-sm text-[var(--text-main)] mb-4">
              <strong className="text-[var(--text-bold)]">Turma:</strong> {membro.turma}
            </p>

            <div className="flex gap-2 text-sm font-bold text-[var(--g4)]">
              <a
                href={membro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--g3)] transition-colors no-underline"
              >
                LinkedIn
              </a>
              <span>|</span>
              <a
                href={membro.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--g3)] transition-colors no-underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}