import { useEffect, useState } from 'react';
import {
  PencilSimple,
  Trash,
  ThumbsUp,
  LinkSimpleHorizontal,
  Flag,
} from '@phosphor-icons/react';

const getRelativeTime = (date: Date) => {
  const now = new Date();
  const diff = Math.floor((+now - +date) / 1000);

  if (diff < 60) return 'agora mesmo';
  if (diff < 3600) return `${Math.floor(diff / 60)}min atrás`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h atrás`;
  return `${Math.floor(diff / 86400)}d atrás`;
};

export const CommentItem = ({ comment }: { comment: ICommentary }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replies, setReplies] = useState<ICommentary[]>([]);

  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.content);

  const handleCopyLink = () => {
    const link = `${window.location.href.split('#')[0]}#comment-${comment.id}`;
    navigator.clipboard.writeText(link);
  };

  const isOwner = false;

  const [replyLoading, setIsReplyLoading] = useState(false);

  useEffect(() => {
    //carregar dados
    setReplies(comment.replies);
  }, [showReplies, replies]);

  const [showMiscButtons, setShowMiscButtons] = useState(false);

  const onMouse = (_: React.MouseEvent<HTMLDivElement>) => {
    setShowMiscButtons(!showMiscButtons);
  };

  return (
    <div
      id={`comment-${comment.id}`}
      className="border-l-2 border-base-border pl-4 pt-1 pb-1 scroll-mt-16"
      onMouseEnter={onMouse}
      onMouseLeave={onMouse}
    >
      <div className="text-sm flex gap-1 items-center">
        <span className="font-medium text-base-primary">@{comment.author}</span>
        {editing ? (
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            rows={2}
            className="w-full mt-1 text-sm border border-base-border rounded bg-base-bg px-3 py-1"
          />
        ) : (
          <span className="text-xs">{getRelativeTime(comment.createdAt)}</span>
        )}
      </div>

      <span>{comment.content}</span>

      <div className="flex justify-between gap-4 text-xs text-base-muted mt-2">
        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <ThumbsUp size={14} />
            <span>{comment.likes}</span>
          </div>

          <button
            onClick={() => setShowReplyBox(!showReplyBox)}
            className="hover:text-base-primary"
          >
            Responder
          </button>

          {comment.replies && comment.replies.length > 0 && (
            <button
              onClick={() => setShowReplies((s) => !s)}
              className="hover:text-base-primary "
            >
              {showReplies
                ? 'Ocultar respostas'
                : `Ver respostas (${comment.replies.length})`}
            </button>
          )}
        </div>

        {showMiscButtons && (
          <div className="flex gap-3">
            <button
              onClick={handleCopyLink}
              className="hover:text-base-primary flex gap-1"
            >
              <LinkSimpleHorizontal size={14} /> Copiar link
            </button>

            {isOwner ? (
              <>
                <button
                  onClick={() => setEditing((e) => !e)}
                  className="hover:text-base-primary flex gap-1"
                >
                  <PencilSimple size={14} /> Editar
                </button>
                <button className="hover:text-red-500 flex gap-1">
                  <Trash size={14} /> Deletar
                </button>
              </>
            ) : (
              <button className="hover:text-yellow-600 flex gap-1">
                <Flag size={14} /> Reportar
              </button>
            )}
          </div>
        )}
      </div>

      {showReplyBox && (
        <div className="mt-2 space-y-2">
          <textarea
            placeholder="Responder comentário..."
            rows={2}
            className="w-full text-sm border border-base-border rounded bg-base-bg px-3 py-2"
          />
          <div className="flex justify-end">
            <button className="bg-base-primary text-white text-xs px-3 py-1 rounded hover:brightness-105">
              Enviar resposta
            </button>
          </div>
        </div>
      )}

      {showReplies &&
        !!comment.replies_total &&
        replies.map((reply) => <CommentItem comment={reply} key={reply.id} />)}
    </div>
  );
};
