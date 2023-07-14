import clsx from 'clsx';

import { ReactComponent as Check } from '#assets/svgs/check.svg';
import { ReactComponent as Dot } from '#assets/svgs/dot.svg';

type ValidationLabelProps = {
  className?: string;
  label: string;
  success?: boolean;
  accepted?: boolean;
};

export default function ValidationLabel({
  className,
  label,
  success
}: ValidationLabelProps) {
  return (
    <p
      className={clsx(
        'text-sm text-mountainMeadow',
        'flex flex-row items-baseline gap-1',
        className
      )}
    >
      {success ? <Check /> : <Dot className="my-auto mr-1 min-w-[3px]" />}
      <span
        className={clsx('inline', {
          'text-mountainMeadow': success
        })}
      >
        {label}
      </span>
    </p>
  );
}
