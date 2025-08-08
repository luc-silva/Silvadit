export const AsideUser = () => {
  return (
    <aside className="bg-surface border border-border rounded shadow-sm p-4 space-y-4">
      <img
        src="/forum-banner.jpg"
        alt="Banner do usuário"
        className="w-full h-24 object-cover rounded"
      />
      <div className="flex items-center gap-3">
        <img
          src="/forum-avatar.jpg"
          alt="Avatar"
          className="w-12 h-12 rounded-full border border-border"
        />
        <div>
          <h3 className="text-subtitle font-semibold">@shotzkytm</h3>
        </div>
      </div>

      <p className="text-sm text-text">Viva la vida...</p>

      <div className="text-sm text-text">
        <strong>14.245</strong> seguidores
      </div>

      <button className="w-full bg-primary text-white text-sm py-2 rounded hover:brightness-105">
        Seguir usuário
      </button>
    </aside>
  );
};
