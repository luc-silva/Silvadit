export const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-sm font-semibold flex items-center gap-2 mb-2">
      {icon} {title}
    </h3>
    <ul className="space-y-1">{children}</ul>
  </div>
);
