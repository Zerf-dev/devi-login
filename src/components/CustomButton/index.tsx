import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactElement } from 'react';

type Props = {
  className?: string;
  label: string;
  labelClassName?: string;
  leftIcon?: ReactElement;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function CustomButton({
  className,
  label,
  labelClassName,
  leftIcon,
  ...props
}: Props): ReactElement<Props> {
  return (
    <button
      className={clsx(
        'flex flex-row items-center justify-center gap-2',
        'border border-solid border-neutral-6',
        'px-3 py-2',
        'group',
        className
      )}
      type="button"
      {...props}
    >
      {leftIcon}
      <span
        className={clsx(
          'select-none group-hover:underline group-hover:underline-offset-2',
          labelClassName
        )}
      >
        {label}
      </span>
    </button>
  );
}
