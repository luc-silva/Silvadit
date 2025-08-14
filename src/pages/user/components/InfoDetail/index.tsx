import { ReactNode } from 'react';

type IProps = {
  label: string;
  value: string;
  icon?: ReactNode;
};

export const InfoDetail = ({ label, value, icon }: IProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-text/90 gap-1">
      <span className="flex items-center gap-2 font-medium text-text">
        {icon}
        {label}
      </span>
      <span className="text-text/70 sm:text-right">{value}</span>
    </div>
  );
};
