import ChangeMode from '#components/ChangeMode';
import CustomButton from '#components/CustomButton';
import FormWrapper from '#components/FormWrapper';
import Spin from '#components/Spin';
import { MODES } from '#constants/webAuth';
import { useWebAuth } from '#contexts/WebAuthProvider';

import { signInValidationsSchema } from './validations';

export default function SignIn() {
  const { error, login, setMode, loading } = useWebAuth();
  const isLoading = loading === MODES.SIGN_IN;
  return (
    <FormWrapper
      className="flex flex-col gap-4"
      onSubmit={({ email, password }) => login?.({ email, password })}
      validationSchema={signInValidationsSchema}
    >
      <h1 className="mb-5 text-center text-heading-4 font-bold">
        Iniciar sesión
      </h1>
      <FormWrapper.Input
        inputContainerClassName="min-h-[42px]"
        name="email"
        placeholder="Email"
      />
      <FormWrapper.Password name="password" placeholder="Contraseña" />
      <span className="link" onClick={() => setMode(MODES.RESET_PASSWORD)}>
        ¿No recuerdas tu contraseña?
      </span>
      <div>
        <CustomButton
          className="bg-neutral-6 w-full mt-1"
          leftIcon={isLoading ? <Spin /> : undefined}
          labelClassName="text-white"
          label={isLoading ? 'Iniciando sesión' : 'Iniciar sesión'}
          type="submit"
        />
        <p className="text-chestnutRose text-sm ml-1 mt-1">{error}</p>
      </div>
      <ChangeMode
        label="¿No tienes una cuenta?"
        cta="Regístrate"
        mode={MODES.SIGN_UP}
      />
    </FormWrapper>
  );
}
