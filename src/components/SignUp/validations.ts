import z from 'zod';

import { checkPasswordStrenght } from '#utils/password';

export const signUpValidationsSchema = z
  .object({
    email: z.string().min(1, 'Email requerido.').email('Email inválido.'),
    password: z.string().min(1, 'Contraseña requerida.'),
    confirmPassword: z.string().min(1, 'Es necesario confirmar la contraseña.')
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden.',
    path: ['confirmPassword']
  })
  .refine(data => checkPasswordStrenght(data.password || ''), {
    message: 'La contraseña es muy débil.',
    path: ['password']
  });
