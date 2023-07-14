import clsx from 'clsx';
import { MotionConfig } from 'framer-motion';

import { ReactComponent as DeviLogo } from '#assets/logos/devi-logo.svg';
import Divider from '#components/Divider';
import ResetPassword from '#components/ResetPassword';
import SignIn from '#components/SignIn';
import SignUp from '#components/SignUp';
import SocialButtons from '#components/SocialButtons';
import { MODES } from '#constants/webAuth';
import { useWebAuth } from '#contexts/WebAuthProvider';

export default function App() {
  const { mode } = useWebAuth();

  return (
    <MotionConfig transition={{ duration: 0.25 }}>
      <div
        className={clsx(
          'relative h-full w-full',
          'bg-login-bg bg-cover bg-center'
        )}
      >
        <div
          className={clsx(
            'relative h-full w-[min(100%,550px)] bg-white overflow-auto overflow-x-hidden custom-scrollbar'
          )}
        >
          <div className="flex flex-col h-full min-h-fit gap-8 p-8 xs:p-16">
            <DeviLogo className="mx-auto min-h-[32px]" />
            <div className="flex grow flex-col justify-center my-auto">
              <div>
                {mode === MODES.RESET_PASSWORD ? (
                  <ResetPassword />
                ) : (
                  <div className="my-auto flex flex-col gap-6">
                    <div className="mt-auto flex flex-col gap-4">
                      {mode === MODES.SIGN_IN ? <SignIn /> : <SignUp />}
                    </div>
                    <Divider />
                    <SocialButtons className="mb-12" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
