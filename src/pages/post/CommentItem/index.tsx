import { useEffect, useState } from 'react';
import {
  PencilSimpleIcon,
  TrashIcon,
  ThumbsUpIcon,
  LinkSimpleHorizontalIcon,
  FlagIcon,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { Loading } from '~/components/Loading';
import { useCommentarySection } from '../hooks/useCommentarySection';
import { useAppFeatures } from '~/context/appWrapper';

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

  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.content);
  const { session } = useAppFeatures();

  const {
    content,
    handleContent,
    loadSubmitPostCommentary,
    loadReplies,
    isRepliesLoading,
    replies,
  } = useCommentarySection();

  const handleCopyLink = () => {
    const link = `${window.location.href.split('#')[0]}#comment-${comment.id}`;
    navigator.clipboard.writeText(link);
  };

  const isOwner = comment.user?.id === session?.id;

  useEffect(() => {
    if (showReplies) {
      loadReplies(comment.id);
    }
  }, [showReplies]);

  const [showMiscButtons, setShowMiscButtons] = useState(false);

  const onMouse = (_: React.MouseEvent<HTMLDivElement>) => {
    setShowMiscButtons(!showMiscButtons);
  };

  const handleReply = async () => {
    await loadSubmitPostCommentary(comment.post.id, comment.id).then(() => {
      setShowReplyBox(false);
    });
    await loadReplies(comment.id);
  };

  return (
    <div
      id={`comment-${comment.id}`}
      className="border-l-2 border-border pl-4 pt-1 pb-1 scroll-mt-16"
      onMouseEnter={onMouse}
      onMouseLeave={onMouse}
    >
      <div className="text-sm flex gap-1 items-center">
        <Link
          className="font-medium text-primary cursor-pointer"
          to={`/user/${comment.user?.id}`}
        >
          @{comment.user?.username}
        </Link>

        <span className="text-xs">
          {getRelativeTime(new Date(comment.dateCreated))}
        </span>
      </div>
      {editing ? (
        <textarea
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          rows={2}
          className="w-full mt-1 text-sm border border-border rounded bg-bg px-3 py-1"
        />
      ) : (
        <span>{comment.content}</span>
      )}

      <div className="flex justify-between gap-4 text-xs text-base-muted mt-2">
        <div className="flex gap-3">
          <div className="flex items-center gap-1 hover:text-primary cursor-pointer">
            <ThumbsUpIcon size={14} />
            <span>{comment.likes}</span>
          </div>

          <button
            onClick={() => setShowReplyBox(!showReplyBox)}
            className="hover:text-primary cursor-pointer"
          >
            Responder
          </button>

          {comment.repliesTotal > 0 && (
            <button
              onClick={() => setShowReplies((s) => !s)}
              className="hover:text-primary cursor-pointer"
            >
              {showReplies
                ? 'Ocultar respostas'
                : `Ver respostas (${comment.repliesTotal})`}
            </button>
          )}
        </div>

        {true && (
          <div className="flex gap-3 items-center">
            {isOwner ? (
              <>
                {editing && (
                  <>
                    <button
                      onClick={() => setEditing((e) => !e)}
                      className="text-white bg-primary flex gap-1 cursor-pointer text-xs px-3 py-1 rounded "
                    >
                      <PencilSimpleIcon size={14} /> Confirmar Edição
                    </button>
                    <button
                      onClick={() => setEditing((e) => !e)}
                      className="hover:text-primary flex gap-1 cursor-pointer"
                    >
                      <PencilSimpleIcon size={14} /> Editar
                    </button>
                  </>
                )}
                {!editing && (
                  <>
                    <button
                      onClick={handleCopyLink}
                      className="hover:text-primary flex gap-1 cursor-pointer"
                    >
                      <LinkSimpleHorizontalIcon size={14} /> Copiar link
                    </button>
                    <button className="hover:text-danger-primary flex gap-1 cursor-pointer">
                      <TrashIcon size={14} /> Deletar
                    </button>
                  </>
                )}
              </>
            ) : (
              <button className="hover:text-danger-primary flex gap-1 cursor-pointer">
                <FlagIcon size={14} /> Reportar
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
            className="w-full text-sm border border-border rounded bg-bg px-3 py-2"
            value={content}
            onChange={handleContent}
          />
          <div className="flex justify-end">
            <button
              className="bg-primary text-white text-xs px-3 py-1 rounded hover:brightness-105 cursor-pointer"
              onClick={handleReply}
            >
              Enviar resposta
            </button>
          </div>
        </div>
      )}

      {showReplies && !!comment.repliesTotal && (
        <>
          {isRepliesLoading && <Loading size="small" />}
          {!isRepliesLoading &&
            replies.map((reply) => (
              <CommentItem comment={reply} key={reply.id} />
            ))}
        </>
      )}
    </div>
  );
};
