import { ImageIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import { useHomePage } from '../hook/useHomePage';

export const PostBox = () => {
  const {
    content,
    handleContent,
    handleImage,
    handleTags,
    handleTitle,
    image,
    tags,
    title,
    setImage,
    loadCreatePost,
    isCreatingLoading,
  } = useHomePage();

  return (
    <div className="bg-surface border border-border rounded p-4 shadow-sm space-y-4">
      <input
        type="text"
        placeholder="Título da postagem"
        className="w-full bg-bg text-sm px-3 py-2 rounded border border-border focus:outline-none placeholder:text-text"
        value={title}
        onChange={handleTitle}
      />

      {/* <input
        type="text"
        placeholder="Hashtag ou tema (#frontend, #ux, etc)"
        className="w-full bg-bg text-sm px-3 py-2 rounded border border-border focus:outline-none placeholder:text-text"
        value={hashtag}
        onChange={(e) => setHashtag(e.target.value)}
      /> */}

      <textarea
        placeholder="No que está pensando?"
        className="w-full bg-bg resize-none text-sm px-3 py-2 rounded border border-border focus:outline-none placeholder:text-text"
        rows={4}
        value={content}
        onChange={handleContent}
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer text-sm text-subtitle hover:text-text">
          <ImageIcon size={18} />
          Anexar imagem
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImage}
          />
        </label>

        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="h-12 rounded object-cover border border-border"
          />
        )}
      </div>

      <div className="flex justify-end">
        <button
          className="px-4 py-2 rounded bg-primary text-white text-sm hover:brightness-105 transition disabled:opacity-50"
          disabled={!title.trim() || isCreatingLoading}
          onClick={loadCreatePost}
        >
          Postar
        </button>
      </div>
    </div>
  );
};
