import {
  ChatCircleDotsIcon,
  FlagIcon,
  PencilSimpleIcon,
  ThumbsUpIcon,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CommentSection } from '~/pages/post/CommentSection';

export const PostCard = ({ data }: { data: IFeed }) => {
  const [showComments, setShowComments] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    content,
    dateCreated,
    dateEdited,
    forum,
    isNsfw,
    owner,
    postId,
    title,
  } = data;

  const image = '';
  const hashtag: string[] = [];

  const MAX_CHARS = 240;
  const shouldTruncate = !image && content.length > MAX_CHARS;
  const visibleContent =
    isExpanded || !shouldTruncate
      ? content
      : content.slice(0, MAX_CHARS) + '...';

  return (
    <div className="bg-surface border border-border rounded p-4 shadow-sm space-y-3 relative">
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          title="Reportar"
          className="text-subtitle hover:text-danger-primary transition-colors"
        >
          <FlagIcon size={18} />
        </button>
      </div>

      <div className="flex flex-col gap-1 pr-10">
        <Link className="text font-semibold" to="/post/123">
          {title}
        </Link>
        <span className="text-sm text-primary">
          {hashtag.map((tag) => (
            <Link to={`search/tag=${tag}`}>{tag}</Link>
          ))}
        </span>
      </div>

      {image ? (
        <img
          src={image}
          alt="imagem do post"
          className="w-full max-h-60 object-cover rounded border border-border"
        />
      ) : (
        <div>
          <p className="text-sm text-text whitespace-pre-line">
            {visibleContent}
          </p>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-primary mt-1 hover:underline"
            >
              {isExpanded ? 'Recolher' : 'Expandir'}
            </button>
          )}
        </div>
      )}

      <div className="text-xs text-text mt-1">
        Por{' '}
        <Link to={`/user/${owner.username}`} className="font-bold">
          @{owner.username}
        </Link>
        {forum && (
          <>
            {' '}
            em{' '}
            <Link className="text-primary" to={`/forum/${forum.id}`}>
              {forum.title}
            </Link>
          </>
        )}
      </div>

      <div className="flex items-center gap-4 text-sm pt-2 border-t border-border mt-3">
        <button className="flex items-center gap-1 text-text hover:text-primary transition-colors cursor-pointer">
          <ThumbsUpIcon size={16} /> Curtir
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1 text-text hover:text-primary transition-colors cursor-pointer"
        >
          <ChatCircleDotsIcon size={16} /> Comentar
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1 text-text hover:text-primary transition-colors cursor-pointer"
        >
          <PencilSimpleIcon size={16} /> Editar
        </button>
      </div>

      {showComments && <CommentSection postId={data.postId} />}
    </div>
  );
};
