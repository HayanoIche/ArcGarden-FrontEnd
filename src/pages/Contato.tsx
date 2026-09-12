function Contato() {
  return (
    <main>
      <section>
        <div>
          <h2>
            Fale <em>conosco</em>
          </h2>

          <p>
            Envie suas dúvidas, sugestões ou feedback sobre o Arcgarden!
          </p>

          <form>
            <div>
              <label>Nome completo</label>
              <input
                type="text"
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label>E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label>Assunto</label>
              <select required>
                <option value="">Selecione</option>
                <option>Dúvida</option>
                <option>Sugestão</option>
                <option>Problema</option>
              </select>
            </div>

            <div>
              <label>Mensagem</label>
              <textarea
                placeholder="Escreva sua mensagem"
                required
              />
            </div>

            <button type="submit">
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contato;