import type { ReactNode } from 'react';

type SectionHeaderProps = {
  icon: ReactNode;
  title: string;
};

export default function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/35 flex items-center justify-center text-base flex-shrink-0">
        {icon}
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
}
