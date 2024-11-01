import { z } from 'zod';

export const CreateUserSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
