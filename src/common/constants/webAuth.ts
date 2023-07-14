import { ReactComponent as FacebookIcon } from '#assets/logos/facebook.svg';
import { ReactComponent as GoogleIcon } from '#assets/logos/google.svg';

export const DATABASE_CONECTION = 'Username-Password-Authentication';

export const SOCIAL_LOGINS = {
  GOOGLE: 'google-oauth2',
  FACEBOOK: 'facebook'
} as const;

export const SOCIAL_LOGIN_ICONS = {
  [SOCIAL_LOGINS.GOOGLE]: GoogleIcon,
  [SOCIAL_LOGINS.FACEBOOK]: FacebookIcon
};

export const MODES = {
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
  RESET_PASSWORD: 'resetPassword'
} as const;

export const ERRORS = {
  invalid_user_password: 'Credenciales inválidas.',
  invalid_password: 'La contraseña es muy débil.',
  invalid_signup: 'Registro inválido, Por favor revisar el email',
  email: 'Ingresar un email válido.',
  password: 'Ingresar una contraseña válida.',
  genericError:
    'Hubo un error inesperado. Por favor intentarlo más tarde o puede contactarse con nosotros.'
} as const;

export type ErrorMessageKey = keyof typeof ERRORS;
