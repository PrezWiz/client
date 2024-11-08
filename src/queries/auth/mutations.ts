import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';
import { LoginRequest, RegisterRequest } from '@/types/auth';

export const authMutations = {
  login: {
    mutationKey: queryKeys.auth.login.queryKey,
    mutationFn: (payload: LoginRequest) => apis.auth.login(payload),
  },
  register: {
    mutationKey: queryKeys.auth.register.queryKey,
    mutationFn: (payload: RegisterRequest) => apis.auth.register(payload),
  },
} as const;
