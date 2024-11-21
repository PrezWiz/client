'use client';

import { useQueryClient } from '@tanstack/react-query';
import { mutations } from '@/queries';
import { CreateOutlinesResponse, CreateSlidesResponse } from '@/types/presentation';

export const useCreationSlideQueries = () => {
  const queryClient = useQueryClient();

  const { presentationId, prototypesDto: { slides: outlines } = { slides: [] } } =
    queryClient.getQueryData<CreateOutlinesResponse>(mutations.presentation.createOutlines.mutationKey) ?? {};

  const { slides } = queryClient.getQueryData<CreateSlidesResponse>(mutations.presentation.create.mutationKey) ?? {};

  return { presentationId, outlines, slides };
};
