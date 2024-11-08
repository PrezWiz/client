import { apiPaths } from '@/constants/apis';
import { baseAxios, extractAxiosData } from '@/libs/baseAxios';
import { ApiResponse } from '@/types/apis';
import { LoginRequest } from '@/types/auth';

export const authApis = {
  login: async ({ email, password }: LoginRequest) => {
    const response = await extractAxiosData<ApiResponse>(baseAxios.post(apiPaths.auth.login, { email, password }));

    return response;
  },
} as const;
