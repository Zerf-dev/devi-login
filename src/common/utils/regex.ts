export const validateWithRegex = (str: string, regex: string): boolean =>
  new RegExp(regex).test(str);

export const hasLowercase = (str: string): boolean =>
  validateWithRegex(str, '(?=.*[a-z])');

export const hasUppercase = (str: string): boolean =>
  validateWithRegex(str, '(?=.*[A-Z])');

export const hasNumber = (str: string): boolean =>
  validateWithRegex(str, '(?=.*[0-9])');

export const hasSpecialCharacter = (str: string): boolean =>
  // eslint-disable-next-line prettier/prettier
  validateWithRegex(str, '(?=.*[!@#\$%\^&\*])');
