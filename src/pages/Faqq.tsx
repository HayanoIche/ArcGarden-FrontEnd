import { Link } from 'react-router-dom';
import FaqCard from '../components/Faq/FaqCard';

const faqItems = [
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
    question: 'Como funciona a IA Iris? ',
    answer:
      'Escolha a missão, grave um vídeo mostrando a ação sustentável e envie pelo app. A IA analisa e se o score for acima de 60%, você recebe Água e SoulPoints.',
  },
  {
    question: 'O que é a roleta diária?',
    answer:
      'Água é a moeda do Arcgarden. Serve pra regar plantas, comprar sementes, temas de jardim e girar a roleta.',
  },
  {
    question: 'O que são SoulPoints? ',
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
    question:'E quando o ranking resetar?',
    answer:
      'O ranking reseta todo início de mês. Os vencedores recebem os descontos na conta de energia do mês seguinte.',
  },
];

export default function Faq() {
  return (
    <div className="flex flex-col items-center w-full bg-[var(--bg-main)]">
      <section className="flex flex-col items-center py-16 px-6 w-full box-border max-w-4xl">
        <span className="bg-[var(--g1)] text-[var(--g4)] text-sm font-bold px-4 py-1 rounded-full mb-4">
          Tire suas dúvidas
        </span>

        <h2 className="font-bold text-[var(--text-bold)] text-3xl lg:text-5xl mb-2 text-center">
          Perguntas e{' '}
          <em
            style={{ fontFamily: 'var(--font-spectral)' }}
            className="italic text-[var(--g3)]"
          >
            respostas
          </em>
        </h2>

        <p className="font-bold text-[var(--text-main)] max-w-2xl text-center mb-10">
          Tudo o que você precisa saber sobre o Arcgarden
        </p>

        <div className="flex flex-col gap-4 w-full">
          {faqItems.map((item) => (
            <FaqCard
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-2 w-full bg-[var(--g1)] py-12 px-6 text-center">
        <h3 className="text-2xl font-bold text-[var(--text-bold)]">
          Ainda tem dúvidas?
        </h3>

        <p className="text-[var(--text-main)] font-semibold mb-2">
          Entre em contato com a nossa equipe
        </p>

        <Link
          to="/contato"
          className="rounded-xl bg-[var(--g4)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--g5)]"
        >
          Ir para contato
        </Link>
      </section>
    </div>
  );
}
