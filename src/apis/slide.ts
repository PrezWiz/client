import { apiPaths } from '@/constants/apis';
import { extractAxiosData, privateAxios } from '@/libs/baseAxios';
import { ApiResponse } from '@/types/apis';
import { CreateOutlinesResponse, Slide } from '@/types/slide';

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
  create: async ({ id, slides }: { id: number; slides: Slide[] }) => {
    const response = await extractAxiosData(privateAxios.post(`${apiPaths.slide.create}/${id}`, { slides }));

    return response;
  },
} as const;
