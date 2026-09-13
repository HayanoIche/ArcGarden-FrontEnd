const items = [
  {
    img: 'src/assets/home/cards/plantinha.png',
    title: 'Missões reais',
    text: 'Grave um vídeo da sua ação sustentável e receba uma nota da IA.',
  },
  {
    img: 'src/assets/home/cards/vasinho.png',
    title: 'Jardim virtual',
    text: 'Suas plantas evoluem conforme você acumula pontos.',
  },
  {
    img: 'src/assets/home/cards/trofeu.png',
    title: 'Recompensas',
    text: 'O primeiro lugar ganha a conta de energia paga.',
  },
];

export default function Funcionalidades() {
  return (
    <section className="w-full flex flex-col items-center bg-transparent lg:bg-[var(--bg-dark)] rounded-none lg:rounded-[2rem] lg:border-[0.5rem] lg:border-[var(--bg-dark)] px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 p-4 lg:p-5 w-full lg:w-auto justify-center">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 w-full lg:w-auto lg:min-w-[10rem] border-[0.3rem] lg:border-[0.4rem] border-[var(--g1)] lg:border-[var(--bg-main)] bg-[var(--g1)] lg:bg-[var(--bg-main)] px-4 py-3 lg:px-6 rounded-[1.25rem] lg:rounded-[1.5rem]"
          >
            <img src={item.img} alt="" className="w-12 lg:w-14 shrink-0 lg:py-2" />
            <div className="flex flex-col font-bold text-left lg:text-center lg:items-center">
              <h3 className="text-[var(--text-bold)] text-base lg:text-lg pb-1">
                {item.title}
              </h3>
              <p className="text-[var(--text-main)] text-sm lg:text-base lg:max-w-[14rem]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}