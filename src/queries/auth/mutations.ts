import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';
import { LoginRequest } from '@/types/auth';

export const authMutations = {
  login: {
    mutationKey: queryKeys.auth.login.queryKey,
    mutationFn: (payload: LoginRequest) => apis.auth.login(payload),
  },
} as const;
