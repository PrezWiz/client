import { apiPaths } from '@/constants/apis';
import { extractAxiosData, privateAxios } from '@/libs/baseAxios';
import {
  CreateOutlinesResponse,
  CreateSlidesResponse,
  OutlineType,
  SlideType,
  SlidesResponse,
  UpdateSlidesResponse,
} from '@/types/presentation';

export const presentationApis = {
  slides: async () => {
    const response = await extractAxiosData<SlidesResponse>(privateAxios.get(apiPaths.presentation.slides));

    return response;
  },
  createOutlines: async (topic: string) => {
    const response = await extractAxiosData<CreateOutlinesResponse>(
      privateAxios.post(apiPaths.presentation.createOutlines, { topic })
    );

    return response;
  },
  create: async ({ id, outlines }: { id: number; outlines: OutlineType[] }) => {
    const response = await extractAxiosData<CreateSlidesResponse>(
      privateAxios.post(`${apiPaths.presentation.create}/${id}`, { outlines })
    );

    return response;
  },
  update: async ({ id, slides }: { id: number; slides: SlideType[] }) => {
    const response = await extractAxiosData<UpdateSlidesResponse>(
      privateAxios.put(`${apiPaths.presentation.update}/${id}`, { slides })
    );

    return response;
  },
} as const;
