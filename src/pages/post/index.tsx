import { useState } from 'react';
import { PencilSimple, Trash } from '@phosphor-icons/react';
import { CommentSection } from './CommentSection';
import { AsideForum } from '~/components/AsideForum';
import { Aside } from './Aside';

interface IPost {
  id: string;
  title: string;
  content: string;
  images: string[];
}

interface IForumSimple {
  banner: string;
  picture: string;
  name: string;
  followers: number;
  tags: string[];
}

interface IUser {}

interface IData {
  post: IPost;
  forum: IForumSimple;
  user: IUser;
}

export const PostPage = () => {
  const [isOwner, setIsOwner] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(
    'Esse é o conteúdo completo do post...',
  );
  const [title, setTitle] = useState('Título do post');
  const [hashtag, setHashtag] = useState('#frontend');

  const handleSave = async () => {
    setLoading(true);
    setTimeout(() => {
      setIsEditing(false);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-bg text-text px-4 py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        <main className="bg-surface border border-border rounded p-6 shadow-sm space-y-4 h-fit">
          <img
            src="/banner-exemplo.jpg"
            alt="Imagem do post"
            className="w-full max-h-72 object-cover rounded"
          />

          {isEditing ? (
            <div className="space-y-3">
              <input
                className="w-full text-lg font-semibold bg-bg border border-border rounded px-3 py-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="w-full text-sm bg-bg border border-border rounded px-3 py-2"
                value={hashtag}
                onChange={(e) => setHashtag(e.target.value)}
              />
              <textarea
                className="w-full text-sm bg-bg border border-border rounded px-3 py-2"
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <div className="flex gap-2 justify-end">
                <button
                  className="px-4 py-2 text-sm rounded text-base-text"
                  onClick={() => setIsEditing(false)}
                  disabled={loading}
                >
                  Cancelar
                </button>
                <button
                  className="px-4 py-2 text-sm rounded bg-bg text-text hover:brightness-105 transition"
                  onClick={handleSave}
                  disabled={loading}
                >
                  {loading ? 'Salvando...' : 'Salvar'}
                </button>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-xl font-semibold">{title}</h1>
              <p className="text-sm text-text">{hashtag}</p>
              <p className="text-sm leading-relaxed">{content}</p>
            </>
          )}

          {isOwner && !isEditing && (
            <div className="flex gap-4 text-sm text-text border-t border-border pt-4">
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1 hover:text-primary cursor-pointer"
              >
                <PencilSimple size={16} /> Editar
              </button>
              <button className="flex items-center gap-1 hover:text-danger-primary cursor-pointer">
                <Trash size={16} /> Excluir
              </button>
            </div>
          )}

          {!isEditing && <CommentSection postId={`123`} />}
        </main>

        <Aside />
      </div>
    </div>
  );
};
