'use client';

import { useQueryClient } from '@tanstack/react-query';
import { mutations } from '@/queries';
import { CreateOutlinesResponse, CreateSlidesResponse } from '@/types/presentation';

export const useCreationSlideQueries = () => {
  const queryClient = useQueryClient();

  const { id, outlines = [] } =
    queryClient.getQueryData<CreateOutlinesResponse>(mutations.presentation.createOutlines.mutationKey) ?? {};

  const { slides } = queryClient.getQueryData<CreateSlidesResponse>(mutations.presentation.create.mutationKey) ?? {};

  return { id, outlines, slides };
};
