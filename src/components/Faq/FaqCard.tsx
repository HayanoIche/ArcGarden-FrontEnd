import { useState } from 'react';

export default function FaqCard(props: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full rounded-2xl border transition-colors duration-200 ${
        isOpen
          ? 'border-[var(--g3)] bg-[var(--g1)]/40'
          : 'border-[var(--bg-dark)] bg-[var(--bg-main)]'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-bold text-[var(--text-bold)]">
          {props.question}
        </span>

        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--g1)] text-[var(--g4)] font-bold transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-[var(--text-main)]">{props.answer}</p>
        </div>
      </div>
    </div>
  );
}
