import { UserPlus, SignIn } from "@phosphor-icons/react";

export const Landing = () => {
  return (
    <main className="min-h-screen bg-base-bg text-base-text flex items-center justify-center px-4">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-base-text text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Entediado?
            <br />
            <span className="text-base-primary">Conecte-se com pessoas reais.</span>
          </h1>
          <p className="text-base-muted text-lg">
            Junte-se à comunidade, descubra fóruns incríveis e converse sobre o que você ama.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button
              onClick={() => {}}
              className="bg-base-primary text-white hover:bg-base-accent transition-colors rounded px-6 py-3 text-sm font-medium flex items-center gap-2"
            >
              <UserPlus size={18} weight="bold" />
              Cadastre-se
            </button>
            <button
              onClick={() => {}}
              className="bg-base-surface text-base-text border border-base-border hover:bg-base-border/20 transition-colors rounded px-6 py-3 text-sm font-medium flex items-center gap-2"
            >
              <SignIn size={18} />
              Entrar
            </button>
          </div>
        </div>

        <div className="flex-1 hidden md:flex items-center justify-center">
          <div className="w-64 h-64 bg-base-surface border border-base-border rounded-lg flex items-center justify-center text-base-muted">
            [ Imagem ou Mascote Aqui ]
          </div>
        </div>
      </div>
    </main>
  );
};
