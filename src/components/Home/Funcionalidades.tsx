import InfoCard from '../ui/InfoCard';
import plantinha from '../../assets/home/cards/plantinha.png';
import vasinho from '../../assets/home/cards/vasinho.png';
import trofeu from '../../assets/home/cards/trofeu.png';

const items = [
  {
    img: plantinha,
    title: 'Missões reais',
    text: 'Grave um vídeo da sua ação sustentável e receba uma nota da IA.',
  },
  {
    img: vasinho,
    title: 'Jardim virtual',
    text: 'Suas plantas evoluem conforme você acumula pontos.',
  },
  {
    img: trofeu,
    title: 'Recompensas',
    text: 'O primeiro lugar ganha a conta de energia paga.',
  },
];

export default function Funcionalidades() {
  return (
    <section className="w-full flex flex-col items-center bg-transparent lg:bg-[var(--bg-dark)] rounded-none lg:rounded-[2rem] lg:border-[0.5rem] lg:border-[var(--bg-dark)] px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 p-4 lg:p-5 w-full lg:w-auto justify-center">
        {items.map((item) => (
          <InfoCard
            key={item.title}
            icon={item.img}
            title={item.title}
            text={item.text}
            className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 w-full lg:w-auto lg:min-w-[10rem] border-[0.3rem] lg:border-[0.4rem] border-[var(--g1)] lg:border-[var(--bg-main)] bg-[var(--g1)] lg:bg-[var(--bg-main)] px-4 py-3 lg:px-6 rounded-[1.25rem] lg:rounded-[1.5rem]"
            iconClassName="w-12 lg:w-14 shrink-0 lg:py-2"
            titleClassName="font-bold text-[var(--text-bold)] text-base lg:text-lg pb-1"
            textClassName="font-bold text-[var(--text-main)] text-sm lg:text-base lg:max-w-[14rem]"
          />
        ))}
      </div>
    </section>
  );
}