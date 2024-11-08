import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: '이메일 형식이 올바르지 않아요' }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 해요' })
    .regex(/[A-Z]/, {
      message: '패스워드는 최소 1개이상 대문자를 포함해야해요',
    })
    .regex(/[a-z]/, {
      message: '패스워드는 최소 1개이상 소문자를 포함해야해요',
    })
    .regex(/[0-9]/, {
      message: '패스워드는 최소 1개이상 숫자를 포함해야해요',
    })
    .regex(/[\W_]/, {
      message: '패스워드는 최소 1개이상 특수문자를 포함해야해요',
    }),
});

export const signUpSchema = z.object({
  email: z.string().email({ message: '이메일 형식이 올바르지 않아요' }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 해요' })
    .regex(/[A-Z]/, {
      message: '패스워드는 최소 1개이상 대문자를 포함해야해요',
    })
    .regex(/[a-z]/, {
      message: '패스워드는 최소 1개이상 소문자를 포함해야해요',
    })
    .regex(/[0-9]/, {
      message: '패스워드는 최소 1개이상 숫자를 포함해야해요',
    })
    .regex(/[\W_]/, {
      message: '패스워드는 최소 1개이상 특수문자를 포함해야해요',
    }),
});
