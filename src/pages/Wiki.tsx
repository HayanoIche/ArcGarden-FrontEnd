import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { imagensPlantas } from '../components/Wiki/plantasImagens';

interface TipoPlanta {
  id: number;
  nome: string;
  categoria: string;
}

export default function Wiki() {
  const [plantas, setPlantas] = useState<TipoPlanta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setErro] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const API_URL = import.meta.env.VITE_URL_API || 'https://arcgarden.onrender.com';

  useEffect(() => {
    setLoading(true);
    setErro(null);

    fetch(`${API_URL}/api/v1/tipos-plantas`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Não foi possível carregar as plantas.');
        }

        return res.json();
      })
      .then((data) => {
        setPlantas(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setErro('Não foi possível carregar as plantas. Tente novamente.');
        setLoading(false);
      });
  }, [API_URL]);

  const criarSlug = (nome: string) => {
    return nome
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl font-bold text-[var(--text-bold)] bg-[var(--bg-main)]">
        Carregando Wiki...
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert">
        {error}
      </div>
    );
  }


  return (
    <div className="flex flex-col items-center py-16 px-6 w-full bg-[var(--bg-main)] min-h-screen">
      <span className="bg-[var(--g1)] text-[var(--g4)] text-sm font-bold px-4 py-1 rounded-full mb-4">
        Almanaque
      </span>
      <h2 className="font-bold text-[var(--text-bold)] text-3xl lg:text-5xl mb-10 text-center">
        Wiki de <em className="font-spectral italic text-[var(--g3)]">Plantas</em>
      </h2>
      
      {plantas.length === 0 ? (
        <p className="text-center text-[var(--text-bold)]">
          Nenhuma planta encontrada.
        </p>
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {plantas.map((planta) => {
          const imagemSrc = imagensPlantas[planta.id];
          const slug = criarSlug(planta.nome);
            
          return (
            <div 
              key={planta.id} 
              onClick={() => navigate(`/wiki/${slug}`)}
              className="flex flex-col items-center bg-white border border-[var(--g1)] rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
            >
              {imagemSrc && (
                <img 
                  src={imagemSrc} 
                  alt={planta.nome} 
                  className="w-28 h-28 object-contain mb-4 animate-respirar" 
                />
              )}
              <h3 className="font-bold text-[var(--text-bold)] text-xl mb-1">
                {planta.nome}
              </h3>
              <span className="text-xs font-semibold text-[var(--g3)] bg-[var(--g1)] px-2.5 py-0.5 rounded-full">
                {planta.categoria}
              </span>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
}