import type { CrossOriginLoginOptions, WebAuth } from 'auth0-js';
import { SyntheticEvent } from 'react';

import { MODE, MODES, SOCIAL_LOGINS } from '#constants/webAuth';

export type Mode = typeof MODES[keyof typeof MODES];
export type Provider = typeof SOCIAL_LOGINS[keyof typeof SOCIAL_LOGINS];
export type Login = (attrs: CrossOriginLoginOptions) => void;
export type LoginWithSocial = (
  provider: Provider
) => (e: SyntheticEvent) => void;
export type SignUp = (attrs: {
  email: string;
  password: string;
  givenName?: string;
  familyName?: string;
}) => void;
export type RequestChangePassword = (attrs: { email: string }) => void;

export type ChangePassword = (attrs: { email: string }) => void;

export type WebAuthValue = {
  webAuth?: WebAuth;
  login: Login;
  loginWithSocial: LoginWithSocial;
  signUp: SignUp;
  changePassword?: ChangePassword;
  isBusy?: boolean;
  mode: Mode;
  loading: Mode | undefined;
  setMode: (mode: Mode) => void;
  error: string;
  requestChangePassword: RequestChangePassword;
};
