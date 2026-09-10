import { Link } from 'react-router-dom';

export default function Footer()
{
    return (
        <footer className="w-full bg-[var(--g4)] py-6 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[var(--g1)] font-bold text-sm sm:text-base">
        
            {/* COPYRIGHT */}
            <p className="text-center md:text-left tracking-wide m-0">
                ©Arcgarden - Challenge FIAP 2026
            </p>

            {/* NAVEGAÇÃO */}
            <nav>
                <ul className="flex flex-col md:flex-row items-center gap-2 sm:gap-4 md:gap-6 list-none m-0 p-0 text-center">
                    <li>
                        <Link to="/" className="hover:text-white transition-colors no-underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/integrantes" className="hover:text-white transition-colors no-underline">
                            Integrantes
                        </Link>
                    </li>
                    <li>
                        <Link to="/sobre" className="hover:text-white transition-colors no-underline">
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link to="/solucao" className="hover:text-white transition-colors no-underline">
                            Solução
                        </Link>
                    </li>
                    <li>
                        <Link to="/faq" className="hover:text-white transition-colors no-underline">
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link to="/contato" className="hover:text-white transition-colors no-underline">
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
  );
}