import fotoFranco from '../assets/integrantes/franco.jpeg';
import fotoIgor from '../assets/integrantes/igor.jpeg';
import fotoMarcela from '../assets/integrantes/marcela.jpeg';
import fotoMatheus from '../assets/integrantes/matheus.jpeg';

interface Membro {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  linkedin: string;
  github: string;
}

const integrantes: Membro[] = [
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

export default function Integrantes() {
  return (
    <div className="flex flex-col items-center py-20 px-6 w-full bg-[var(--bg-main)] pb-40">
      <span className="bg-[var(--g1)] text-[var(--g4)] text-sm font-bold px-4 py-1 rounded-full mb-4 font-spectral">
        Nossa equipe
      </span>
      <h2 className="font-bold text-[var(--text-bold)] text-3xl lg:text-5xl mb-2 text-center">
        Conheça os integrantes do <em className="font-spectral italic text-[var(--g3)]">Arcgarden</em>
      </h2>
      <p className="font-medium text-[var(--text-main)] max-w-2xl text-center mb-14 font-spectral">
        Quem faz o projeto acontecer no dia a dia
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {integrantes.map((membro) => (
          <div 
            key={membro.rm} 
            className="flex flex-col items-center bg-white border-2 border-[var(--g1)] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <img
              src={membro.foto}
              alt={`Foto de ${membro.nome}`}
              className="w-36 h-36 rounded-full object-cover mb-6 border-2 border-[var(--g1)] shadow-inner"
            />
            <h3 className="font-bold text-[var(--text-bold)] text-xl mb-2 text-center font-spectral">
              {membro.nome}
            </h3>
            <span className="text-xs font-semibold text-[var(--g3)] bg-[var(--g1)] px-3 py-1 rounded-full mb-6 font-spectral">
              {membro.turma} • RM {membro.rm}
            </span>

            <div className="flex gap-3 text-sm font-bold text-[var(--g4)] mt-auto pt-4 border-t border-[var(--g1)] w-full justify-center">
              <a
                href={membro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--g3)] transition-colors no-underline font-spectral"
              >
                LinkedIn
              </a>
              <span>|</span>
              <a
                href={membro.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--g3)] transition-colors no-underline font-spectral"
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