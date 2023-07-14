import z from 'zod';

export const resetPasswordValidationSchema = z.object({
  email: z.string().min(1, 'Email requerido.').email('Email inválido.')
});
