import { ChangeEvent, useEffect, useState } from 'react';
import { CommentItem } from '../CommentItem';

enum SortOptions {
  LIKES = 'likes',
  RECENT = 'recent',
}

const commentaryMock: ICommentary[] = [
  {
    author: 'luan_dev',
    content: 'Muito bom esse post!',
    createdAt: new Date(),
    id: 123,
    likes: 32,
    replies: [
      {
        author: 'joana_js',
        content: 'Totalmente de acordo.',
        createdAt: new Date(),
        id: 312,
        likes: 23,
        replies: [
          {
            author: 'jorge',
            content: 'Nem tanto',
            createdAt: new Date(),
            id: 312,
            likes: 23,
            replies: [],
            replies_total: 0,
          },
        ],
        replies_total: 1,
      },
      {
        author: 'lucas_node',
        content: 'Explica mais sobre isso?',
        createdAt: new Date(),
        id: 312,
        likes: 23,
        replies: [],
        replies_total: 0,
      },
    ],
    replies_total: 2,
  },
];

export const CommentSection = ({ postId }: { postId: string }) => {
  const [sortBy, setSortBy] = useState<SortOptions>(SortOptions.LIKES);

  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    const { target } = event;

    setSortBy(target.value as SortOptions);
  };

  // ao pegar link do comentario, abrir página do post, porem tendo apenas o comentario em questao.
  // ter botão para carregar toidos os cometarios

  useEffect(() => {
    // chamar dados
  }, [postId]);

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-base-muted">Comentários</span>
        <select
          className="text-sm bg-base-bg border border-base-border rounded px-2 py-1"
          value={sortBy}
          onChange={handleSort}
        >
          <option value="likes">Mais curtidos</option>
          <option value="recentes">Mais recentes</option>
        </select>
      </div>

      <div className="flex flex-col gap-3">
        {commentaryMock.map((data) => (
          <CommentItem comment={data} key={data.id} />
        ))}
        {commentaryMock.map((data) => (
          <CommentItem comment={data} key={data.id} />
        ))}
      </div>

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
