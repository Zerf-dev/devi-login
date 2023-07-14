import clsx from 'clsx';

import { useWebAuth } from '#contexts/WebAuthProvider';
import { Mode } from '#contexts/WebAuthProvider/types';

type ChangePageModeProps = {
  label: string;
  cta: string;
  mode: Mode;
};

export default function ChangeMode({ label, cta, mode }: ChangePageModeProps) {
  const { setMode } = useWebAuth();

  const handleOnClick = () => setMode(mode);

  return (
    <div className={clsx('xs:flex-row gap-2', 'flex flex-col')}>
      <span>{label}</span>
      <span className="link" onClick={handleOnClick}>
        {cta}
      </span>
    </div>
  );
}
