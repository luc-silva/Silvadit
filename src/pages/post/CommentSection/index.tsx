import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { CommentItem } from '../CommentItem';
import { Loading } from '~/components/Loading';
import { useCommentarySection } from '../hooks/useCommentarySection';

enum SortOptions {
  LIKES = 'likes',
  RECENT = 'recent',
}

export const CommentSection = ({ postId }: { postId: string }) => {
  const {
    content,
    handleContent,
    isSubmitLoading,
    loadSubmitPostCommentary,
    loadCommentaries,
    commentaries,
  } = useCommentarySection();

  const [sortBy, setSortBy] = useState<SortOptions>(SortOptions.LIKES);

  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    const { target } = event;

    setSortBy(target.value as SortOptions);
  };

  const handleSubmit = async () => {
    await loadSubmitPostCommentary(postId);
  };

  useEffect(() => {
    loadCommentaries(postId);
  }, [postId]);

  const isLoading = useMemo(() => isSubmitLoading, [isSubmitLoading]);

  if (isLoading) return <Loading />;
  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-subtitle">Comentários</span>
        <select
          className="text-sm bg-bg border border-border rounded px-2 py-1"
          value={sortBy}
          onChange={handleSort}
        >
          <option value="likes">Mais curtidos</option>
          <option value="recentes">Mais recentes</option>
        </select>
      </div>

      <div className="flex flex-col gap-3">
        {commentaries.map((data) => (
          <CommentItem comment={data} key={data.id} />
        ))}
      </div>

      <textarea
        className="w-full text-sm bg-bg border border-border rounded px-3 py-2"
        placeholder="Escreva um comentário..."
        rows={2}
        onChange={handleContent}
        value={content}
      />
      <div className="flex justify-end mt-2">
        <button
          className="bg-primary text-white text-sm px-3 py-1 rounded hover:brightness-105 cursor-pointer"
          onClick={handleSubmit}
        >
          Comentar
        </button>
      </div>
    </div>
  );
};
