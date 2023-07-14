import clsx from 'clsx';
import { HTMLAttributes } from 'react';

type Props = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function CustomDivider({ className, ...props }: Props) {
  return (
    <div
      className={clsx('h-[1px] w-full bg-neutral-6', className)}
      {...props}
    />
  );
}
