export const Section = ({
  title,
  children,
  noGrid = false,
}: {
  title: string;
  children: React.ReactNode;
  noGrid?: boolean;
}) => {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 shadow-sm">
      <h2 className="text-base font-semibold text-title mb-4">{title}</h2>
      <div className={noGrid ? '' : 'grid grid-cols-1 sm:grid-cols-2 gap-3'}>
        {children}
      </div>
    </div>
  );
};
