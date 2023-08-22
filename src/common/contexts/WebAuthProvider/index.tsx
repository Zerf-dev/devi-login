/* eslint-disable react-refresh/only-export-components */
import { WebAuth } from 'auth0-js';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

import { DATABASE_CONECTION, MODES } from '#constants/webAuth';
import { createAuthClient } from '#services/auth0Client';
import { getErrorMessage } from '#utils/errors';

import type {
  Login,
  LoginWithSocial,
  Mode,
  RequestChangePassword,
  SignUp,
  WebAuthValue
} from './types';

export const WebAuthContext = createContext<WebAuthValue>({} as WebAuthValue);

export const useWebAuth = () => useContext(WebAuthContext);

export function WebAuthProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<Mode>(MODES.SIGN_IN);
  const [loading, setLoading] = useState<Mode | undefined>();
  const [webAuth, setWebAuth] = useState<WebAuth>();
  const [error, setError] = useState('');

  useEffect(() => {
    if (webAuth) return;
    setWebAuth(createAuthClient());
  }, [webAuth]);

  const clearError = useCallback(() => setError(''), []);

  useEffect(clearError, [mode, clearError]);

  const login: Login = ({ email, password }) => {
    setLoading(MODES.SIGN_IN);
    clearError();
    return webAuth?.login(
      {
        realm: DATABASE_CONECTION,
        email,
        password
      },
      err => {
        setLoading(undefined);
        // eslint-disable-next-line no-console
        if (err) {
          setError(getErrorMessage(err));
        }
      }
    );
  };

  const loginWithSocial: LoginWithSocial = provider => e => {
    clearError();
    e.preventDefault();
    webAuth?.authorize({ connection: provider });
  };

  const signUp: SignUp = ({ email, password }) => {
    setLoading(MODES.SIGN_UP);
    clearError();
    return webAuth?.redirect.signupAndLogin(
      {
        connection: DATABASE_CONECTION,
        email,
        password
      },
      err => {
        setLoading(undefined);
        if (err) {
          setError(getErrorMessage(err));
        }
      }
    );
  };

  const requestChangePassword: RequestChangePassword = ({ email }) => {
    clearError();
    setLoading(MODES.RESET_PASSWORD);
    return webAuth?.changePassword(
      {
        connection: DATABASE_CONECTION,
        email: email
      },
      err => {
        setLoading(undefined);
        if (err) {
          setError(getErrorMessage(err));
        }
      }
    );
  };

  return (
    <WebAuthContext.Provider
      value={{
        webAuth,
        login,
        loginWithSocial,
        signUp,
        mode,
        setMode,
        error,
        loading,
        requestChangePassword
      }}
    >
      {children}
    </WebAuthContext.Provider>
  );
}
