import { apiPaths } from '@/constants/apis';
import { extractAxiosData, privateAxios } from '@/libs/baseAxios';
import { ApiResponse } from '@/types/apis';
import { CreateOutlinesResponse, CreateSlidesResponse, Outline } from '@/types/presentation';

export const presentationApis = {
  slides: async () => {
    const response = await extractAxiosData<ApiResponse>(privateAxios.get(apiPaths.presentation.slides));

    return response;
  },
  createOutlines: async (topic: string) => {
    const response = await extractAxiosData<CreateOutlinesResponse>(
      privateAxios.post(apiPaths.presentation.createOutlines, { topic })
    );

    return response;
  },
  create: async ({ id, outlines }: { id: number; outlines: Outline[] }) => {
    const response = await extractAxiosData<CreateSlidesResponse>(
      privateAxios.post(`${apiPaths.presentation.create}/${id}`, { slides: outlines })
    );

    return response;
  },
} as const;
