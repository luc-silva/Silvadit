import {
  At,
  CalendarBlank,
  Clock,
  Globe,
  ShieldCheck,
  Moon,
  Eye,
  Bell,
  Info,
  GoogleLogo,
  GithubLogo,
  TwitterLogo,
  Article,
  ThumbsUp,
  UserCircle,
  BezierCurve,
} from '@phosphor-icons/react';
import { Section } from '../Section';
import { InfoDetail } from '../InfoDetail';

export const AccountTab = () => {
  return (
    <div className="space-y-6 w-full p-6">
      <Section title="Informações da Conta">
        <InfoDetail
          label="Email"
          value="usuario@email.com"
          icon={<At size={16} />}
        />
        <InfoDetail
          label="Data de criação"
          value="30 de Julho de 2025"
          icon={<CalendarBlank size={16} />}
        />
        <InfoDetail
          label="Último login"
          value="01 de Agosto de 2025 às 14:23"
          icon={<Clock size={16} />}
        />
        <InfoDetail
          label="Localização"
          value="São Paulo, Brasil"
          icon={<Globe size={16} />}
        />
        <InfoDetail
          label="Verificação"
          value="✅ Conta verificada"
          icon={<ShieldCheck size={16} />}
        />
      </Section>

      <Section title="Preferências">
        <InfoDetail
          label="Tema"
          value="Sistema (Auto)"
          icon={<Moon size={16} />}
        />
        <InfoDetail
          label="Visibilidade"
          value="Público"
          icon={<Eye size={16} />}
        />
        <InfoDetail
          label="Notificações"
          value="Ativadas"
          icon={<Bell size={16} />}
        />
      </Section>

      <Section title="Bio" noGrid>
        <p className="text-sm leading-relaxed text-text/80">
          <Info size={16} className="inline-block mr-1 text-primary" />
          Amante de tecnologia, fóruns e discussões saudáveis. Sempre em busca
          de aprendizado e boas conversas.
        </p>
      </Section>

      <Section title="Contas Conectadas">
        <InfoDetail
          label="Google"
          value="Conectado"
          icon={<GoogleLogo size={16} />}
        />
        <InfoDetail
          label="GitHub"
          value="Não conectado"
          icon={<GithubLogo size={16} />}
        />
        <InfoDetail
          label="Twitter"
          value="Conectado"
          icon={<TwitterLogo size={16} />}
        />
      </Section>

      <Section title="Estatísticas">
        <InfoDetail
          label="Postagens"
          value="128"
          icon={<Article size={16} />}
        />
        <InfoDetail
          label="Curtidas recebidas"
          value="452"
          icon={<ThumbsUp size={16} />}
        />
        <InfoDetail
          label="Fóruns que administra"
          value="2"
          icon={<UserCircle size={16} />}
        />
        <InfoDetail
          label="Beta tester"
          value="Sim"
          icon={<BezierCurve size={16} />}
        />
      </Section>
    </div>
  );
};
