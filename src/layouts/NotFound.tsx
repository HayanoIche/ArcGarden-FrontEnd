import { Link } from 'react-router-dom';

export default function NotFound()
{
    return (
        <div className="w-full flex flex-col items-center justify-center min-h-[60vh] py-16 px-6 text-center">
            <span className="bg-[var(--g1)] text-[var(--g4)] text-[0.85rem] font-bold py-1 px-4 rounded-full mb-4">
                Erro 404
            </span>

            <h1 className="text-6xl md:text-8xl font-bold text-[var(--text-bold)] mb-4">
                Ops<em className="font-['Spectral',serif] italic text-[var(--g3)]">!</em>
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-bold)] mb-2">
                Página não encontrada
            </h2>

            <p className="text-base text-[var(--text-main)] max-w-[30rem] mb-8">
                Parece que a página que você está procurando não existe ou foi movida no jardim do Arcgarden.
            </p>

            <Link
                to="/"
                className="bg-[var(--g4)] text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-[var(--g3)] transition-colors no-underline">
                Voltar para a Home
            </Link>
        </div>
    );
}