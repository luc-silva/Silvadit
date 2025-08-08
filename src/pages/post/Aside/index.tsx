import { AsideForum } from '~/components/AsideForum';
import { AsideUser } from '~/components/AsideUser';

export const Aside = () => {
  return (
    <aside className="space-y-4">
      <AsideForum />
      <AsideUser />
    </aside>
  );
};
