import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'O que é o Arcgarden?',
    answer:
      'O Arcgarden é um jogo de jardim virtual sustentável onde você completa missões no mundo real, grava vídeos comprovando suas ações e ganha recompensas pra cuidar do seu jardim.',
  },
  {
    question: 'As plantas podem morrer?',
    answer:
      'A planta murcha depois de alguns dias sem rega e para de pontuar no ranking. A planta não perde nível, é só regar que volta ao normal. Plantas nível 5 nunca murcham.',
  },
  {
    question: 'Como funciona a IA Iris?',
    answer:
      'Escolha a missão, grave um vídeo mostrando a ação sustentável e envie pelo app. A IA analisa e se o score for acima de 60%, você recebe Água e SoulPoints.',
  },
  {
    question: 'O que é a roleta diária?',
    answer:
      'Água é a moeda do Arcgarden. Serve pra regar plantas, comprar sementes, temas de jardim e girar a roleta.',
  },
  {
    question: 'O que são SoulPoints?',
    answer:
      'SoulPoints acumulam infinitamente e são trocados por benefícios reais fora do jogo, como desconto na conta de energia elétrica, em parceria com a SoulUp.',
  },
  {
    question: 'Preciso pagar para jogar?',
    answer:
      'Não. O Arcgarden é gratuito. Você só precisa ter conta na SoulUp e completar missões sustentáveis no dia a dia.',
  },
  {
    question: 'Como ganho desconto na energia?',
    answer:
      'O Ranking Mensal é baseado no EcoScore. O 1º lugar ganha a conta de energia 100% paga, o 2º ganha 50% e o 3º ganha 25%.',
  },
  {
    question: 'Quando o ranking reseta?',
    answer:
      'O ranking reseta todo início de mês. Os vencedores recebem os descontos na conta de energia do mês seguinte.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleFAQ(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div className="w-full bg-[var(--bg-main)]">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-16 md:py-20">
        <span className="mb-4 rounded-full bg-[var(--g1)] px-4 py-1 text-sm font-bold text-[var(--g4)]">
          FAQ
        </span>

        <h1 className="mb-3 text-center text-4xl font-bold text-[var(--text-bold)] md:text-5xl">
          Perguntas e respostas
        </h1>

        <p className="mb-10 max-w-2xl text-center font-semibold text-[var(--text-main)]">
          Tire suas principais dúvidas sobre o Arcgarden, as missões e o
          sistema de recompensas.
        </p>

        <div className="flex w-full flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all ${
                  isOpen
                    ? 'border-[var(--g2)] shadow-md'
                    : 'border-[#e2e2d8] hover:border-[var(--g2)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-7"
                >
                  <span className="font-bold text-[var(--text-bold)]">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--g1)] text-xl font-normal text-[var(--g4)] transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-[#eeeeE6] px-5 pb-6 pt-4 leading-7 text-[var(--text-main)] md:px-7">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="w-full bg-[var(--g4)] px-6 py-14 text-center">
        <h2 className="mb-2 text-3xl font-bold text-[var(--bg-main)] md:text-4xl">
          Ainda tem dúvidas?
        </h2>

        <p className="mb-7 font-semibold text-[var(--g1)]">
          Entre em contato com a nossa equipe
        </p>

        <Link
          to="/contato"
          className="inline-flex rounded-full bg-[var(--g1)] px-7 py-3 font-bold text-[var(--g4)] no-underline transition-colors hover:bg-white"
        >
          Ir para contato
        </Link>
      </section>
    </div>
  );
}
