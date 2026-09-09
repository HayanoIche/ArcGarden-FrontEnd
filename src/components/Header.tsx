import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // Variáveis pro hamburguer
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full h-auto lg:h-[9vh] lg:py-0 py-4 flex flex-wrap lg:flex-nowrap justify-between items-center bg-amber-50 border-[var(--bg-dark)] border-b">

      {/* LOGO */}
      <img
        src="src/assets/ArcGardenLogo.png"
        alt="Logo"
        className="w-[16rem] pl-6 lg:pl-12 italic object-contain"
      />

      {/* BOTÃO HAMBÚRGUER */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex flex-col justify-center items-center gap-[0.4rem] pr-6 lg:pr-12 bg-transparent border-none cursor-pointer"
        aria-label="Abrir Menu"
      >
        <span
          className={`block w-[1.6rem] h-[0.18rem] bg-[var(--text-bold)] rounded-[2px] transition-all duration-300 origin-center ${
            isOpen ? 'translate-y-[0.58rem] rotate-45' : ''
          }`}
        />
        <span
          className={`block w-[1.6rem] h-[0.18rem] bg-[var(--text-bold)] rounded-[2px] transition-all duration-300 origin-center ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-[1.6rem] h-[0.18rem] bg-[var(--text-bold)] rounded-[2px] transition-all duration-300 origin-center ${
            isOpen ? '-translate-y-[0.58rem] -rotate-45' : ''
          }`}
        />
      </button>

      {/* NAV / MENU */}
      <nav
        className={`w-full lg:w-auto transition-all duration-350 ease-in-out overflow-hidden lg:overflow-visible ${
          isOpen 
            ? 'max-h-[30rem] pb-4 lg:pb-0' 
            : 'max-h-0 lg:max-h-none'
        }`}
      >
        <ul className="list-none flex flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-8 w-full px-6 lg:px-0 lg:pr-12 pt-2 lg:pt-0">

          {/* ITEM HOME */}
          <li className="w-full lg:w-auto border-b border-zinc-400 lg:border-none">
            <Link
              to="/"
              className="flex items-center leading-normal py-3 lg:py-0 w-full no-underline text-[var(--text-main)] hover:text-[var(--g3)] transition-colors"
            >
              <img src="src/assets/icons/home.png" alt="" className="w-8 mr-2 object-contain" />
              <span>Home</span>
            </Link>
          </li>
          
          {/* ITEM SOBRE */}
          <li className="w-full lg:w-auto border-b border-zinc-400 lg:border-none">
            <Link 
              to="/sobre" 
              className="flex items-center leading-normal py-3 lg:py-0 w-full no-underline text-[var(--text-main)] hover:text-[var(--g3)] transition-colors"
            >
              <img src="src/assets/icons/about.png" alt="" className="w-8 mr-2 object-contain" />
              <span>Sobre</span>
            </Link>
          </li>
          
          {/* ITEM SOBRE */}
          <li className="w-full lg:w-auto border-b border-zinc-400 lg:border-none">
            <Link 
              to="/sobre" 
              className="flex items-center leading-normal py-3 lg:py-0 w-full no-underline text-[var(--text-main)] hover:text-[var(--g3)] transition-colors"
            >
              <img src="src/assets/icons/about.png" alt="" className="w-8 mr-2 object-contain" />
              <span>Sobre</span>
            </Link>
          </li>

          {/* BOTÃO CONTATO */}
          <li className="w-full lg:w-auto border-b border-zinc-400 lg:border-none">
            <Link
              to="/contato"
              className="flex items-center justify-center leading-normal w-full py-3 lg:py-1 lg:px-4 bg-transparent lg:bg-[var(--g2)] text-[var(--g2)] lg:text-[var(--bg-main)] lg:rounded-[2rem] lg:hover:bg-[var(--g3)] transition-all"
            >
              <img src="src/assets/icons/contact.png" alt="" className="w-8 mr-4 object-contain" />
              <span>Contato</span>
            </Link>
          </li>

        </ul>
      </nav>

    </header>
  );
}