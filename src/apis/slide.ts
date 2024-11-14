import { apiPaths } from '@/constants/apis';
import { extractAxiosData, privateAxios } from '@/libs/baseAxios';
import { ApiResponse } from '@/types/apis';
import { SlideResponse } from '@/types/slide';

export const slideApis = {
  slides: async () => {
    const response = await extractAxiosData<ApiResponse>(privateAxios.get(apiPaths.slide.slides));

    return response;
  },
  create: async (topic: string) => {
    const response = await extractAxiosData<SlideResponse>(privateAxios.post(apiPaths.slide.create, { topic }));

    return response;
  },
} as const;
