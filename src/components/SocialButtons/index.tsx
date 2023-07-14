import clsx from 'clsx';
import { useLayoutEffect } from 'react';

import CustomButton from '#components/CustomButton';
import { SOCIAL_LOGINS } from '#constants/webAuth';
import { useWebAuth } from '#contexts/WebAuthProvider';

import { SOCIAL_LOGIN_BUTTONS } from './constants';

type Props = {
  className?: string;
};

export default function SocialButtons({ className }: Props) {
  const { loginWithSocial } = useWebAuth();

  useLayoutEffect(() => {
    const userAgent = navigator.userAgent;
    if (!userAgent.match(/FBAN|FBAV|Instagram/i)) return;
    const googleBtn = document.getElementById(SOCIAL_LOGINS.GOOGLE);
    if (!googleBtn) return;
    googleBtn.style.display = 'none';
  }, []);

  return (
    <div className={clsx('flex flex-col gap-4', className)}>
      {SOCIAL_LOGIN_BUTTONS.map(({ id, Icon, label }) => (
        <CustomButton
          key={id}
          id={id}
          className="w-full py-3"
          leftIcon={<Icon />}
          label={label}
          onClick={loginWithSocial?.(id)}
        />
      ))}
    </div>
  );
}
