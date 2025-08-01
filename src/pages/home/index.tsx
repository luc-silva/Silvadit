import { useState } from 'react';
import {
  ChatCircle,
  ThumbsUp,
  Chats,
  UsersThree,
  Fire,
  Image,
} from '@phosphor-icons/react';

// Caixa de criação de post, Feed e Lateral serão extraídos depois

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-bg text-base-text px-4 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-6">
        {/* Lateral esquerda */}
        <aside className="space-y-4 hidden lg:block">
          <Section title="Fóruns em alta" icon={<Fire size={16} />}>
            <ListItem label="r/programação" />
            <ListItem label="r/design" />
            <ListItem label="r/games" />
            <ListItem label="r/startups" />
            <ListItem label="r/memes" />
          </Section>

          <Section title="Temas populares" icon={<Chats size={16} />}>
            <ListItem label="#react" />
            <ListItem label="#ux" />
            <ListItem label="#openai" />
            <ListItem label="#darkmode" />
            <ListItem label="#tailwind" />
          </Section>
        </aside>

        {/* Feed principal */}
        <main className="space-y-6">
          <PostBox />

          <PostCard
            title="Explorando o Tailwind com temas dinâmicos"
            content="Comecei a aplicar variáveis CSS no projeto e ficou incrível. Aqui está como fiz..."
            author="joao_dev"
            forum="r/frontend"
          />

          <PostCard
            title="Preciso de ajuda com autenticação JWT"
            content="Minha API Express não está salvando os tokens corretamente. Alguém passou por isso?"
            author="amanda_codes"
          />
        </main>

        {/* Lateral direita */}
        <aside className="space-y-4 hidden lg:block">
          <Section title="Amigos" icon={<UsersThree size={16} />}>
            <ListItem label="@bruno" />
            <ListItem label="@clara" />
            <ListItem label="@luis" />
          </Section>

          <Section title="Fóruns seguidos" icon={<Chats size={16} />}>
            <ListItem label="r/devops" />
            <ListItem label="r/uiux" />
            <ListItem label="r/startups" />
          </Section>
        </aside>
      </div>
    </div>
  );
};

export const PostBox = () => {
  const [title, setTitle] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [content, setContent] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-base-surface border border-base-border rounded p-4 shadow-sm space-y-4">
      {/* Título */}
      <input
        type="text"
        placeholder="Título da postagem"
        className="w-full bg-base-bg text-sm px-3 py-2 rounded border border-base-border focus:outline-none placeholder:text-base-muted"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Hashtag */}
      <input
        type="text"
        placeholder="Hashtag ou tema (#frontend, #ux, etc)"
        className="w-full bg-base-bg text-sm px-3 py-2 rounded border border-base-border focus:outline-none placeholder:text-base-muted"
        value={hashtag}
        onChange={(e) => setHashtag(e.target.value)}
      />

      {/* Conteúdo */}
      <textarea
        placeholder="No que está pensando?"
        className="w-full bg-base-bg resize-none text-sm px-3 py-2 rounded border border-base-border focus:outline-none placeholder:text-base-muted"
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* Anexo de imagem */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer text-sm text-base-muted hover:text-base-text">
          <Image size={18} />
          Anexar imagem
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>

        {/* Preview simples da imagem */}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="h-12 rounded object-cover border border-base-border"
          />
        )}
      </div>

      {/* Botão de postagem */}
      <div className="flex justify-end">
        <button
          className="px-4 py-2 rounded bg-base-primary text-white text-sm hover:brightness-105 transition disabled:opacity-50"
          disabled={!title.trim()}
        >
          Postar
        </button>
      </div>
    </div>
  );
};

export const PostCard = ({
  title,
  content,
  author,
  forum,
  hashtag = '#geral',
  image,
}: {
  title: string;
  content: string;
  author: string;
  forum?: string;
  hashtag?: string;
  image?: string;
}) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-base-surface border border-base-border rounded p-4 shadow-sm space-y-3">
      {/* Título + hashtag */}
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="text-sm text-base-primary">{hashtag}</span>
      </div>

      {/* Imagem, se houver */}
      {image && (
        <img
          src={image}
          alt="imagem do post"
          className="w-full max-h-60 object-cover rounded border border-base-border"
        />
      )}

      {/* Conteúdo */}
      <p className="text-sm text-base-muted">{content}</p>

      {/* Autor + fórum */}
      <div className="text-xs text-base-muted mt-1">
        Por <strong>@{author}</strong>
        {forum && (
          <>
            {' '}
            em <span className="text-base-primary">{forum}</span>
          </>
        )}
      </div>

      {/* Botões */}
      <div className="flex items-center gap-4 text-sm pt-2 border-t border-base-border mt-3">
        <button className="flex items-center gap-1 text-base-muted hover:text-base-primary transition-colors">
          <ThumbsUp size={16} /> Curtir
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1 text-base-muted hover:text-base-primary transition-colors"
        >
          <ChatCircle size={16} /> Comentar
        </button>
      </div>

      {/* Comentários */}
      {showComments && <CommentSection />}
    </div>
  );
};

const CommentSection = () => {
  const [sortBy, setSortBy] = useState('likes');

  return (
    <div className="mt-4 space-y-4">
      {/* Filtro de ordenação */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-base-muted">Comentários</span>
        <select
          className="text-sm bg-base-bg border border-base-border rounded px-2 py-1"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="likes">Mais curtidos</option>
          <option value="recentes">Mais recentes</option>
        </select>
      </div>

      {/* Comentário com suporte a resposta */}
      <CommentItem
        author="luan_dev"
        content="Muito bom esse post!"
        replies={[
          { author: 'joana_js', content: 'Totalmente de acordo.' },
          { author: 'lucas_node', content: 'Explica mais sobre isso?' },
        ]}
      />

      {/* Campo para novo comentário */}
      <textarea
        className="w-full text-sm bg-base-bg border border-base-border rounded px-3 py-2"
        placeholder="Escreva um comentário..."
        rows={2}
      />
      <div className="flex justify-end mt-2">
        <button className="bg-base-primary text-white text-sm px-3 py-1 rounded hover:brightness-105">
          Comentar
        </button>
      </div>
    </div>
  );
};

const CommentItem = ({
  author,
  content,
  replies = [],
}: {
  author: string;
  content: string;
  replies?: { author: string; content: string }[];
}) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replyBoxOpen, setReplyBoxOpen] = useState(false);

  return (
    <div className="border-l-2 border-base-border pl-3 space-y-2">
      <div className="text-sm">
        <span className="font-medium">@{author}</span>: {content}
      </div>

      <div className="flex gap-4 text-xs text-base-muted">
        <button
          onClick={() => setReplyBoxOpen(!replyBoxOpen)}
          className="hover:text-base-primary"
        >
          Responder
        </button>
        {replies.length > 0 && (
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="hover:text-base-primary"
          >
            {showReplies
              ? 'Esconder respostas'
              : `Ver respostas (${replies.length})`}
          </button>
        )}
      </div>

      {replyBoxOpen && (
        <div className="mt-2">
          <textarea
            className="w-full text-sm bg-base-bg border border-base-border rounded px-3 py-2"
            placeholder="Responder comentário..."
            rows={2}
          />
          <div className="flex justify-end mt-1">
            <button className="bg-base-primary text-white text-xs px-3 py-1 rounded hover:brightness-105">
              Enviar resposta
            </button>
          </div>
        </div>
      )}

      {/* Replies */}
      {showReplies && (
        <div className="mt-2 space-y-2 pl-4 border-l border-base-border">
          {replies.map((r, i) => (
            <div key={i} className="text-sm">
              <span className="font-medium">@{r.author}</span>: {r.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-sm font-semibold flex items-center gap-2 mb-2">
      {icon} {title}
    </h3>
    <ul className="space-y-1">{children}</ul>
  </div>
);

const ListItem = ({ label }: { label: string }) => (
  <li className="text-sm text-base-muted hover:text-base-text cursor-pointer">
    {label}
  </li>
);
