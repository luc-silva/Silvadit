import { useState } from 'react';
import { IdentityTab } from './tabs/identity';
import { RegisterContext } from './context';
import { BasicInfoTab } from './tabs/basic-info';
import { ImagesTab } from './tabs/images';
import { InterestsTab } from './tabs/interests';
import { CheckIcon } from '@phosphor-icons/react';
import { useRegister } from './hooks';
import { useNavigate } from 'react-router-dom';

const steps = ['Credenciais', 'Identidade', 'Imagens', 'Interesses'];

export function RegisterPage() {
  const [step, setStep] = useState(0);

  const goNext = () => step < steps.length - 1 && setStep((prev) => prev + 1);
  const goBack = () => step > 0 && setStep((prev) => prev - 1);

  const config = useRegister();
  const navigate = useNavigate()

  const handleCreateUser = async () => {
    await config.loadRegisterUser().then(() => {
      navigate("/login")
    });
  };

  return (
    <RegisterContext.Provider value={config}>
      <div className="flex items-center h-screen bg-bg">
        <div className="w-xl mx-auto p-4 space-y-6 h-3/5 bg-surface border-border border rounded-2xl relative">
          <div className="flex justify-between mb-6">
            {steps.map((label, index) => (
              <div
                key={index}
                className={`flex-1 text-center py-2 px-2 border-b-2 font-medium
              ${
                index === step
                  ? 'border-primary text-primary'
                  : index < step
                  ? 'border-success text-success'
                  : 'text-text border-text '
              }
              `}
              >
                {label}
              </div>
            ))}
          </div>

          <div className="space-y-6 max-h-[80%] overflow-y-auto">
            {step === 0 && <BasicInfoTab />}
            {step === 1 && <IdentityTab />}
            {step === 2 && <ImagesTab />}
            {step === 3 && <InterestsTab />}
          </div>

          <div className="flex justify-between pt-6 sticky bottom-0 border-t border-border">
            {step !== 0 && (
              <button
                onClick={goBack}
                className="btn text-text"
                disabled={step === 0 || config.isRegisterUserLoading}
              >
                Voltar
              </button>
            )}
            {step < steps.length - 1 ? (
              <button onClick={goNext} className="btn text-text">
                Próximo
              </button>
            ) : (
              <button
                className="bg-success/25 btn text-success px-3 py-0.5 rounded-[5px] flex items-center gap-1"
                onClick={handleCreateUser}
                disabled={config.isRegisterUserLoading}
              >
                <CheckIcon size={20} />
                Finalizar
              </button>
            )}
          </div>
        </div>
      </div>
    </RegisterContext.Provider>
  );
}
