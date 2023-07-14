import ChangeMode from '#components/ChangeMode';
import CustomButton from '#components/CustomButton';
import FormWrapper from '#components/FormWrapper';
import PasswordStrengthValidation from '#components/PasswordStrengthValidation';
import Spin from '#components/Spin';
import { MODES } from '#constants/webAuth';
import { useWebAuth } from '#contexts/WebAuthProvider';
import { useInput } from '#hooks/useInput';

import { signUpValidationsSchema } from './validations';

export default function SignUp() {
  const { signUp, error, loading } = useWebAuth();
  const { value: password, onChange: onChangePassword } = useInput();
  const isLoading = loading === MODES.SIGN_UP;

  return (
    <FormWrapper
      className="flex flex-col gap-4"
      onSubmit={({ email, password }) => signUp?.({ email, password })}
      validationSchema={signUpValidationsSchema}
    >
      <h1 className="mb-5 text-center text-heading-4 font-bold">Regístrate</h1>
      <FormWrapper.Input
        inputContainerClassName="min-h-[42px]"
        name="email"
        placeholder="Email"
      />
      <FormWrapper.Password
        name="password"
        placeholder="Contraseña"
        onChange={onChangePassword}
      />
      <FormWrapper.Password
        name="confirmPassword"
        placeholder="Confirmar contraseña"
      />
      {password && <PasswordStrengthValidation password={password} />}
      <div>
        <CustomButton
          className="bg-neutral-6 w-full mt-1"
          leftIcon={isLoading ? <Spin /> : undefined}
          labelClassName="text-white"
          label={isLoading ? 'Registrándote' : 'Registrarme'}
          type="submit"
        />
        <p className="text-chestnutRose text-sm ml-1 mt-1">{error}</p>
      </div>
      <ChangeMode
        label="¿Tienes una cuenta?"
        cta="Iniciar sesión"
        mode={MODES.SIGN_IN}
      />
    </FormWrapper>
  );
}
