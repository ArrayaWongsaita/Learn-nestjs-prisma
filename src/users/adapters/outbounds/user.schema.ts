import { z } from 'zod';

export const CreateUserSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// export type CreateUserDto = z.infer<typeof CreateUserSchema>;
