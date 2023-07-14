import { PASSWORD_STRENGTH_VALIDATIONS } from '#constants/passwordValidations';

export const checkPasswordStrenght = (password: string) =>
  PASSWORD_STRENGTH_VALIDATIONS.map(({ validation }) =>
    validation(password)
  ).every(Boolean);
