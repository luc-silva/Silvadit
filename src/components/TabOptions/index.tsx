import React from 'react';

export interface ITabItem {
  value: string;
  text: string;
  icon?: React.ReactNode;
}

interface IProps {
  onClickTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
  tabs: ITabItem[];
}

export const Tabs = ({ tabs, activeTab, onClickTab }: IProps) => {
  return (
    <div className="flex items-center gap-2 border-b border-border overflow-x-auto">
      {tabs.map(({ value, text, icon }) => (
        <button
          onClick={() => onClickTab(value)}
          className={`flex items-center gap-2 px-4 py-2 text-sm border-b-2 transition cursor-pointer ${
            activeTab === value
              ? 'border-primary text-text font-medium'
              : 'border-transparent text-text hover:text-text'
          }`}
        >
          {icon ?? null}
          {text}
        </button>
      ))}
    </div>
  );
};
