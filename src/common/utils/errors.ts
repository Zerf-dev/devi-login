import { Auth0Error } from 'auth0-js';

import { ERRORS, ErrorMessageKey } from '#constants/webAuth';

export const getErrorMessage = (
  error: Auth0Error | ErrorMessageKey
): string => {
  if (typeof error === 'string' && error in ERRORS) {
    return ERRORS[error];
  }
  const authErrorCode = (error as Auth0Error).code as ErrorMessageKey;
  if (typeof authErrorCode === 'string' && authErrorCode in ERRORS) {
    return ERRORS[authErrorCode];
  }
  return ERRORS['genericError'];
};
