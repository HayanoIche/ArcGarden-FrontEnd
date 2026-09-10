import { Link } from 'react-router-dom';

export function NavItem(props: { to: string; label: string; iconSrc: string; isButton?: boolean; onClick?: () => void })
{
    return (
        <li className="w-full lg:w-auto border-b border-zinc-400 lg:border-none">
            <Link
                to={props.to}
                onClick={props.onClick}
                className={
                    props.isButton
                        ? "flex items-center justify-center leading-normal w-full py-3 lg:py-1 lg:px-4 bg-transparent lg:bg-[var(--g2)] text-[var(--g2)] lg:text-[var(--bg-main)] lg:rounded-[2rem] hover:text-[var(--g3)] lg:hover:bg-[var(--g3)] lg:hover:text-[var(--bg-main)] transition-all font-bold"
                        : "flex items-center justify-center lg:justify-start leading-normal py-3 lg:py-0 w-full no-underline text-[var(--text-main)] hover:text-[var(--g3)] transition-colors font-bold"
                }
            >
            <img src={props.iconSrc} alt="" className="w-7 h-7 mr-2 object-contain" />
            <span className="tracking-wide">{props.label}</span>
            </Link>
        </li>
    );
}