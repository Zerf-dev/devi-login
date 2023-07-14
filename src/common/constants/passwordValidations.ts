import {
  hasLowercase,
  hasNumber,
  hasSpecialCharacter,
  hasUppercase
} from '#utils/regex';

export const MINIMUN_LENGTH = 8;
export const MIN_CHARACTER_VALIDATIONS = 3;

export const CHARACTER_VALIDATIONS = [
  {
    id: 'lowercase',
    label: 'Letras minúsculas (a-z).',
    validation: hasLowercase
  },
  {
    id: 'uppercase',
    label: 'Letras mayúsculas (A-Z).',
    validation: hasUppercase
  },
  {
    id: 'number',
    label: 'Números (0-9).',
    validation: hasNumber
  },
  {
    id: 'specialCharacter',
    label: 'Caracteres especiales (!@#$%^&*).',
    validation: hasSpecialCharacter
  }
];

export const PASSWORD_STRENGTH_VALIDATIONS = [
  {
    id: 'length',
    label: `Debe contener al menos ${MINIMUN_LENGTH} caracteres.`,
    validation: (value: string) => value.length >= 8
  },
  {
    id: 'characters',
    label: 'Debe contener 3 de los siguientes caracteres:',
    validation: (value: string) =>
      CHARACTER_VALIDATIONS.map(({ validation }) => validation(value)).filter(
        Boolean
      ).length >= MIN_CHARACTER_VALIDATIONS,
    validations: CHARACTER_VALIDATIONS
  }
];
