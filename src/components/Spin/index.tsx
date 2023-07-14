import clsx from 'clsx';

type SpinProps = {
  className?: string;
};

export default function Spin({ className }: SpinProps) {
  return (
    <span
      className={clsx(
        'h-5 w-5 animate-spin',
        'rounded-full border-[1.5px] border-solid border-white border-l-transparent border-t-transparent',
        className
      )}
    />
  );
}
