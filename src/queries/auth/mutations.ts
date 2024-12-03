import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';
import { ChangePasswordRequest, LoginRequest, RegisterRequest } from '@/types/auth';

export const authMutations = {
  login: {
    mutationKey: queryKeys.auth.login.queryKey,
    mutationFn: (payload: LoginRequest) => apis.auth.login(payload),
  },
  register: {
    mutationKey: queryKeys.auth.register.queryKey,
    mutationFn: (payload: RegisterRequest) => apis.auth.register(payload),
  },
  changePassword: {
    mutationKey: queryKeys.auth.changePassword.queryKey,
    mutationFn: (payload: ChangePasswordRequest) => apis.auth.changePassword(payload),
  },
  deleteAccount: {
    mutationKey: queryKeys.auth.deleteAccount.queryKey,
    //TODO: 추후 API 변경시 비밀번호 수집 필요
    mutationFn: apis.auth.deleteAccount,
  },
} as const;
