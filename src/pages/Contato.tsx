function Contato() {
  return (
    <main className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div>
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            Fale <em className="text-green-600 not-italic">conosco</em>
          </h2>

          <p className="mb-8 text-gray-600">
            Envie suas dúvidas, sugestões ou feedback sobre o ArcGarden!
          </p>

          <form className="mx-auto flex w-full max-w-sm flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-900">
                Nome completo
              </label>

              <input
                className="rounded-xl border-2 border-lime-200 px-4 py-3 outline-none focus:border-lime-500"
                type="text"
                placeholder="Seu nome"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-900">
                E-mail
              </label>

              <input
                className="rounded-xl border-2 border-lime-200 px-4 py-3 outline-none focus:border-lime-500"
                type="email"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-900">
                Assunto
              </label>

              <select
                className="rounded-xl border-2 border-lime-200 px-4 py-3 outline-none focus:border-lime-500"
                required
              >
                <option value="">Selecione</option>
                <option>Dúvida</option>
                <option>Sugestão</option>
                <option>Problema</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-900">
                Mensagem
              </label>

              <textarea
                className="min-h-32 resize-y rounded-xl border-2 border-lime-200 px-4 py-3 outline-none focus:border-lime-500"
                placeholder="Escreva sua mensagem"
                required
              />
            </div>

            <button
              className="w-full rounded-xl bg-green-900 px-4 py-3 font-semibold text-white hover:bg-green-800"
              type="submit"
            >
              Enviar mensagem
            </button>
          </form>

          <div className="mx-auto mt-4 w-full max-w-sm rounded-2xl bg-lime-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">
              Informações
            </h3>

            <p className="text-sm font-semibold text-gray-600">
              E-mail
            </p>

            <p className="mt-4 text-center text-sm font-semibold text-gray-600">
              oarcgarden@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contato;