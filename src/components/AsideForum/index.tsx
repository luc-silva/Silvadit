export const AsideForum = () => {
  return (
    <aside className="bg-base-surface border border-base-border rounded shadow-sm p-4 space-y-4">
      <img
        src="/forum-banner.jpg"
        alt="Banner do fórum"
        className="w-full h-24 object-cover rounded"
      />
      <div className="flex items-center gap-3">
        <img
          src="/forum-avatar.jpg"
          alt="Avatar"
          className="w-12 h-12 rounded-full border border-base-border"
        />
        <div>
          <h3 className="text-base font-semibold">r/frontend</h3>
          <p className="text-xs text-base-muted">Forum de design e UI</p>
        </div>
      </div>

      <p className="text-sm text-base-muted">
        Um espaço para debater sobre desenvolvimento frontend e interfaces
        digitais.
      </p>

      <div className="text-sm text-base-muted">
        <strong>14.245</strong> seguidores
      </div>

      <button className="w-full bg-base-primary text-white text-sm py-2 rounded hover:brightness-105">
        Seguir fórum
      </button>
    </aside>
  );
};
