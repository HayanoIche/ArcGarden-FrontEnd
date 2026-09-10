import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from './NavItem';

function MenuButton(props: { isOpen: boolean; onClick: () => void })
{
  const lineStyle = "block w-[1.6rem] h-[0.18rem] bg-[var(--text-bold)] rounded-[2px] transition-all duration-300 origin-center";
  
  return (
    <button
      onClick={props.onClick}
      className="lg:hidden flex flex-col justify-center items-center gap-[0.4rem] pr-6 lg:pr-12 bg-transparent border-none cursor-pointer"
      aria-label={props.isOpen ? "Fechar Menu" : "Abrir Menu"}
    >
    
    <span className={`${lineStyle} ${props.isOpen ? 'translate-y-[0.58rem] rotate-45' : ''}`} />
    <span className={`${lineStyle} ${props.isOpen ? 'opacity-0' : ''}`} />
    <span className={`${lineStyle} ${props.isOpen ? '-translate-y-[0.58rem] -rotate-45' : ''}`} />
    </button>
  );
}

// Array de links para evitar repetição
const navLinks = [
  { to: '/', label: 'Home', iconSrc: 'src/assets/icons/home.png' },
  { to: '/integrantes', label: 'Integrantes', iconSrc: 'src/assets/icons/members.png' },
  { to: '/sobre', label: 'Sobre', iconSrc: 'src/assets/icons/about.png' },
  { to: '/solucao', label: 'Solução', iconSrc: 'src/assets/icons/solution.png' },
  { to: '/faq', label: 'FAQ', iconSrc: 'src/assets/icons/solution.png' },
  { to: '/contato', label: 'Contato', iconSrc: 'src/assets/icons/contact.png', isButton: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  
  return (
    <header className="relative w-full h-auto lg:h-[9vh] lg:py-0 py-4 flex flex-wrap lg:flex-nowrap justify-between items-center bg-amber-50 border-[var(--bg-dark)] border-b">

    {/* LOGO */}
    <Link to="/" className="pl-4 sm:pl-6 lg:pl-12 py-2 flex items-center shrink-0">
      <img
        src="src/assets/ArcGardenLogo.png"
        alt="Arc Garden Logo"
        className="w-32 sm:w-44 md:w-52 lg:w-60 h-auto object-contain"
      />
    </Link>

    {/* BOTÃO HAMBURGUI */}
    <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    
    {/* MENU NORMAL */}
    <nav className={`w-full lg:w-auto transition-all duration-350 ease-in-out overflow-hidden lg:overflow-visible ${isOpen ? 'max-h-[30rem] pb-4 lg:pb-0' : 'max-h-0 lg:max-h-none'}`}>
      <ul className="list-none flex flex-col lg:flex-row items-center gap-0 lg:gap-8 w-full px-6 lg:px-0 lg:pr-12 pt-2 lg:pt-0">
        {navLinks.map((link) => (
          <NavItem
            key={link.to}
            to={link.to}
            label={link.label}
            iconSrc={link.iconSrc}
            isButton={link.isButton}
            onClick={closeMenu}
          />
        ))}
      </ul>
    </nav>
  </header>
  );
}