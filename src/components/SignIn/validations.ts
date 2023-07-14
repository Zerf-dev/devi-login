import z from 'zod';

export const signInValidationsSchema = z.object({
  email: z.string().min(1, 'Email requerido.').email('Email inválido.'),
  password: z.string().min(1, 'Contraseña requerida.')
});
