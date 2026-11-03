import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { imagensPlantas } from '../components/Wiki/plantasImagens';
import fundoImg from '../assets/fundo.png';

interface TipoPlanta {
  id: number;
  nome: string;
  categoria: string;
  xpMaximo: number;
  descricao: string;
}

export default function WikiDetalhe() {
  const { nomePlanta } = useParams<{ nomePlanta: string }>();
  const navigate = useNavigate();
  const [planta, setPlanta] = useState<TipoPlanta | null>(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_URL_API || 'https://arcgarden.onrender.com';

  useEffect(() => {
    if (!nomePlanta) return;
    setLoading(true);

    fetch(`${API_URL}/api/v1/tipos-plantas`)
      .then((res) => res.json())
      .then((lista: TipoPlanta[]) => {
        const encontrada = lista.find(
          (p) =>
            p.nome
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '') === nomePlanta.toLowerCase()
        );

        if (encontrada) {
          return fetch(`${API_URL}/api/v1/tipos-plantas/${encontrada.id}`);
        }
        throw new Error('Planta não encontrada');
      })
      .then((res) => res.json())
      .then((data) => {
        setPlanta(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [nomePlanta, API_URL]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl font-bold text-[var(--text-bold)] bg-[var(--bg-main)]">
        Carregando detalhes...
      </div>
    );
  }

  if (!planta) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-xl font-bold text-[var(--text-bold)] bg-[var(--bg-main)] gap-4">
        <p>Planta não encontrada.</p>
        <button 
          onClick={() => navigate('/wiki')} 
          className="text-sm font-bold text-[var(--g4)] hover:underline cursor-pointer"
        >
          Voltar para a Wiki
        </button>
      </div>
    );
  }

  const imagemSrc = imagensPlantas[planta.id];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 sm:px-8 w-full bg-[var(--bg-main)]">
      
      <div className="w-full max-w-7xl mb-4">
        <button 
          onClick={() => navigate('/wiki')} 
          className="text-sm font-bold text-[var(--g4)] hover:underline cursor-pointer"
        >
          ← Voltar para a Wiki
        </button>
      </div>

      <div className="w-full max-w-7xl min-h-[75vh] bg-white border-2 border-[var(--g1)] rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row gap-10 items-stretch justify-between">
        
        <div 
          className="w-full md:w-5/12 flex flex-col items-center justify-center border-2 border-[var(--g1)] rounded-2xl p-8 shadow-inner bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${fundoImg})` }}
        >
          {imagemSrc ? (
            <img 
              src={imagemSrc} 
              alt={planta.nome} 
              className="w-64 h-64 sm:w-80 sm:h-80 object-contain drop-shadow-xl animate-respirar z-10" 
            />
          ) : (
            <div className="w-64 h-64 flex items-center justify-center text-[var(--text-main)] z-10">Sem Imagem</div>
          )}
          
        </div>

        <div className="w-full md:w-7/12 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between border-b-2 border-[var(--g1)] pb-5 mb-6 gap-3">
              <h2 className="font-bold text-[var(--text-bold)] text-4xl sm:text-5xl">
                {planta.nome}
              </h2>
              <span className="bg-[var(--g1)] text-[var(--g4)] text-sm font-bold px-4 py-2 rounded-lg uppercase">
                {planta.categoria}
              </span>
            </div>

            <div className="bg-[var(--g1)] bg-opacity-20 p-4 rounded-xl border border-[var(--g1)] mb-6 flex items-center justify-between">
              <span className="text-base font-bold text-[var(--text-bold)]">XP Máximo:</span>
              <span className="text-lg font-extrabold text-[var(--g3)]">{planta.xpMaximo} XP</span>
            </div>

            <div className="text-[var(--text-main)] text-base sm:text-lg leading-relaxed bg-[var(--bg-main)] p-6 rounded-xl border border-[var(--g1)] flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--g4)]">
                Descrição
              </span>
              <p className="italic">{planta.descricao}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
