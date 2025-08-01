import { Outlet } from 'react-router-dom';

export function ForumPage() {
  return (
    <div className="flex flex-col m-3">
      <Outlet />
    </div>
  );
}
