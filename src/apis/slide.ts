import { apiPaths } from '@/constants/apis';
import { extractAxiosData, privateAxios } from '@/libs/baseAxios';
import { ApiResponse } from '@/types/apis';

export const slideApis = {
  slides: async () => {
    const response = await extractAxiosData<ApiResponse>(privateAxios.get(apiPaths.slide.slides));

    return response;
  },
} as const;
