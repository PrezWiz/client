'use client';

import { StrictPropsWithChildren } from '@/types/common';
import { cn } from '@/utils/styles';

const Container = ({ children }: StrictPropsWithChildren) => {
  return <div className="h-full w-full rounded-lg border-2 border-dashed border-gray-300 p-6 px-12">{children}</div>;
};

type TitleProps = {
  value: string;
  className?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
} & ({ readOnly: true } | { readOnly?: false; onChange: (value: string) => void });

const Title = ({ value, onChange, className, readOnly }: TitleProps) => {
  return (
    <input
      value={value}
      maxLength={40}
      className={cn('mb-2 h-full w-full bg-transparent p-2 text-3xl font-semibold focus:outline-none', className)}
      readOnly={readOnly}
      onChange={e => onChange?.(e.target.value)}
    />
  );
};

type DescriptionProps = {
  value: string;
  className?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
} & ({ readOnly: true } | { readOnly?: false; onChange: (value: string) => void });

const Description = ({ value, onChange, className, readOnly }: DescriptionProps) => {
  return (
    <textarea
      value={value}
      readOnly={readOnly}
      className={cn(
        'h-full w-full resize-none rounded border border-none bg-transparent p-2 text-2xl leading-[1.8] focus:outline-none',
        className
      )}
      onChange={e => onChange?.(e.target.value)}
    />
  );
};

const Components = {
  Container,
  Title,
  Description,
};

export default Components;
