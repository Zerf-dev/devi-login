import clsx from 'clsx';

import CustomDivider from '#components/CustomDivider';

type Props = {
  className?: string;
};

export default function Divider({ className }: Props) {
  return (
    <div className={clsx('flex flex-row items-center gap-2', className)}>
      <CustomDivider />
      <span>O</span>
      <CustomDivider />
    </div>
  );
}
