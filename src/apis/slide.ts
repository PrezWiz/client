import { apiPaths } from '@/constants/apis';
import { extractAxiosData, privateAxios } from '@/libs/baseAxios';
import { ApiResponse } from '@/types/apis';
import { CreateOutlinesResponse, CreateSlidesResponse, Slide } from '@/types/slide';

export const slideApis = {
  slides: async () => {
    const response = await extractAxiosData<ApiResponse>(privateAxios.get(apiPaths.slide.slides));

    return response;
  },
  createOutlines: async (topic: string) => {
    const response = await extractAxiosData<CreateOutlinesResponse>(
      privateAxios.post(apiPaths.slide.createOutlines, { topic })
    );

    return response;
  },
  create: async ({ id, outlines }: { id: number; outlines: Slide[] }) => {
    const response = await extractAxiosData<CreateSlidesResponse>(
      privateAxios.post(`${apiPaths.slide.create}/${id}`, { slides: outlines })
    );

    return response;
  },
} as const;
