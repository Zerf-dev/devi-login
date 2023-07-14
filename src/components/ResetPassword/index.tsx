import { ReactComponent as Chevron } from '#assets/svgs/chevron.svg';
import CustomButton from '#components/CustomButton';
import FormWrapper from '#components/FormWrapper';
import Spin from '#components/Spin';
import { MODES } from '#constants/webAuth';
import { useWebAuth } from '#contexts/WebAuthProvider';

import { resetPasswordValidationSchema } from './validations';

export default function ResetPassword() {
  const { requestChangePassword, error, setMode, loading } = useWebAuth();
  const isLoading = loading === MODES.RESET_PASSWORD;
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-row gap-1 mb-10 items-center"
        onClick={() => setMode(MODES.SIGN_IN)}
      >
        <Chevron className="h-5 text-neutral-6 -rotate-90" />
        <span className="link font-medium">Volver atrás</span>
      </div>
      <h1 className="text-center text-heading-5 font-bold mb-10">
        ¿Olvidaste tu contraseña?
      </h1>
      <p className="mb-4">
        Ingresa tu email y te enviaremos un link para restablecer tu contraseña.
      </p>
      <FormWrapper
        className="flex flex-col gap-5"
        onSubmit={({ email }) => requestChangePassword({ email })}
        validationSchema={resetPasswordValidationSchema}
      >
        <FormWrapper.Input name="email" placeholder="Email" />
        <div>
          <CustomButton
            className="w-full bg-neutral-6"
            leftIcon={isLoading ? <Spin /> : undefined}
            labelClassName="text-white"
            label={isLoading ? 'Enviando email' : 'Enviar email'}
            type="submit"
          />
          <p className="text-chestnutRose text-sm ml-1 mt-1">{error}</p>
        </div>
      </FormWrapper>
    </div>
  );
}
