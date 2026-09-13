const steps = [
  { img: 'src/assets/home/tutorial/receba.png', text: 'Receba missões diárias' },
  { img: 'src/assets/home/tutorial/grave.png', text: 'Grave o vídeo da ação' },
  { img: 'src/assets/home/tutorial/iris.png', text: 'A IA avalia sua ação' },
  { img: 'src/assets/home/tutorial/ganhe.png', text: 'Ganhe pontos' },
  { img: 'src/assets/home/tutorial/suba.png', text: 'Suba no ranking' },
];

export default function ComoFunciona() {
  return (
    <section className="flex flex-col items-center py-12 px-6 w-full">
      <h2 className="font-bold text-[var(--g4)] text-2xl lg:text-4xl pb-6 text-center">
        - COMO FUNCIONA -
      </h2>

      <ul className="flex flex-wrap lg:flex-nowrap justify-center gap-3 lg:gap-4 w-full lg:w-auto list-none">
  {steps.map((step) => (
    <li key={step.text} className="w-[calc(33.33%-0.5rem)] lg:w-40">
      <div className="w-full h-full min-h-[6rem] lg:w-40 lg:h-40 flex flex-col items-center justify-center gap-2 lg:gap-0 bg-[var(--g1)] border-[0.3rem] lg:border-[0.4rem] border-[var(--g4)] rounded-[1.2rem] lg:rounded-[2rem] p-3 lg:p-4 overflow-hidden">
        <img src={step.img} alt="" className="w-10 h-10 lg:w-14 lg:h-14" />
        <p className="font-bold text-[var(--text-bold)] text-center text-[0.8rem] lg:text-base max-w-[6rem]">
          {step.text}
        </p>
      </div>
    </li>
     ))}
      </ul>
    </section>
  );
}