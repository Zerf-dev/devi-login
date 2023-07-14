import { SOCIAL_LOGINS, SOCIAL_LOGIN_ICONS } from '#constants/webAuth';

export const SOCIAL_LOGIN_BUTTONS = [
  {
    id: SOCIAL_LOGINS.GOOGLE,
    Icon: SOCIAL_LOGIN_ICONS[SOCIAL_LOGINS.GOOGLE],
    label: 'Ingresar con Google'
  },
  {
    id: SOCIAL_LOGINS.FACEBOOK,
    Icon: SOCIAL_LOGIN_ICONS[SOCIAL_LOGINS.FACEBOOK],
    label: 'Ingresar con Facebook'
  }
];
