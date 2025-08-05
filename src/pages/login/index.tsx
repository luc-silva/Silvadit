import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginPage } from './hooks';

export function LoginPage() {
  const { handleLogin, handlePassword, login, password, loadLogin } =
    useLoginPage();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loadLogin().then(() => {
      navigate('/forum');
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-base-100 text-base-content">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Entrar na sua conta</h1>
          <p className="text-sm text-base-content/60">
            Acesse para continuar explorando o fórum
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 flex gap-4 flex-col">
          <TextField
            label="Email"
            //type="email"
            fullWidth
            value={login}
            onChange={handleLogin}
          />
          <TextField
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={handlePassword}
          />

          <Button type="submit" className="bg-primary text-text w-full mt-2">
            Entrar
          </Button>
        </form>

        <div className="text-sm text-center text-base-content/60">
          Não tem uma conta?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-primary font-medium hover:underline"
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
}
