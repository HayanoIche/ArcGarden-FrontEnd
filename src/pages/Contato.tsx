import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormularioContato {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

const inputStyles =
  "w-full rounded-xl border-2 bg-[#fffcf7] px-4 py-3 outline-none transition-colors";

function Contato() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormularioContato>();
  const [enviado, setEnviado] = useState(false);

  const onSubmit = (data: FormularioContato) => {
    console.log("Dados do formulário:", data);
    setEnviado(true);
  };

  const handleEnviarOutra = () => {
    reset();
    setEnviado(false);
  };

  return (
    <main className="bg-[#fffcf7]">
      <section className={`mx-auto w-full max-w-6xl px-6 ${enviado ? 'py-[9rem]' : 'py-16'}`}>
        <div>
          <h2 className="mb-4 text-center text-5xl font-bold text-gray-900">
            Fale <em>conosco</em>
          </h2>

          <p className="mb-8 text-center font-semibold text-gray-600">
            Envie suas dúvidas, sugestões ou feedback sobre o ArcGarden!
          </p>

          <div className="mx-auto flex w-full max-w-xs flex-col gap-4">
            {enviado ? (
              <div className="flex flex-col items-center justify-center rounded-2xl bg-white border-2 border-[#d8dda8] p-8 text-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#d8dda8] flex items-center justify-center text-[#41521e] text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mensagem enviada!</h3>
                <p className="text-sm text-gray-600">
                  Obrigado pelo contato! Retornaremos em breve.
                </p>
                <button
                  onClick={handleEnviarOutra}
                  className="w-full rounded-xl bg-[#41521e] px-4 py-3 font-semibold text-white hover:bg-[#344218] cursor-pointer mt-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
                
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-900">
                    Nome completo
                  </label>
                  <input
                    {...register("nome", { required: "Campo obrigatório" })}
                    className={`${inputStyles} ${errors.nome ? 'border-red-500 focus:border-red-500' : 'border-[#d8dda8] focus:border-[#41521e]'}`}
                    type="text"
                    placeholder="Seu nome"
                  />
                  {errors.nome && (
                    <span className="text-xs text-red-500 font-semibold mt-0.5">
                      {errors.nome.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-900">
                    E-mail
                  </label>
                  <input
                    {...register("email", { 
                      required: "Campo obrigatório",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "E-mail inválido"
                      }
                    })}
                    className={`${inputStyles} ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#d8dda8] focus:border-[#41521e]'}`}
                    type="email"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 font-semibold mt-0.5">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-900">
                    Assunto
                  </label>
                  <select 
                    {...register("assunto", { required: "Selecione uma opção" })} 
                    className={`${inputStyles} ${errors.assunto ? 'border-red-500 focus:border-red-500' : 'border-[#d8dda8] focus:border-[#41521e]'}`}
                  >
                    <option value="">Selecione</option>
                    <option value="Dúvida">Dúvida</option>
                    <option value="Sugestão">Sugestão</option>
                    <option value="Problema">Problema</option>
                  </select>
                  {errors.assunto && (
                    <span className="text-xs text-red-500 font-semibold mt-0.5">
                      {errors.assunto.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-900">
                    Mensagem
                  </label>
                  <textarea
                    {...register("mensagem", { required: "Campo obrigatório" })}
                    className={`${inputStyles} min-h-32 resize-y ${errors.mensagem ? 'border-red-500 focus:border-red-500' : 'border-[#d8dda8] focus:border-[#41521e]'}`}
                    placeholder="Escreva sua mensagem"
                  />
                  {errors.mensagem && (
                    <span className="text-xs text-red-500 font-semibold mt-0.5">
                      {errors.mensagem.message}
                    </span>
                  )}
                </div>

                <button
                  className="w-full rounded-xl bg-[#41521e] px-4 py-3 font-semibold text-white hover:bg-[#344218] cursor-pointer mt-2"
                  type="submit"
                >
                  Enviar mensagem
                </button>
              </form>
            )}

            <div className="rounded-2xl bg-[#d8dda8] p-6 text-center">
              <h3 className="mb-1 text-lg font-bold text-gray-900">
                Informações de Contato
              </h3>
              <p className="text-sm font-semibold text-gray-600">
                oarcgarden@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contato;