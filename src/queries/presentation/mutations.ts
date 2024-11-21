import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';
import { Outline } from '@/types/presentation';

export const presentationMutations = {
  createOutlines: {
    mutationKey: queryKeys.presentation.createOutlines.queryKey,
    mutationFn: (topic: string) => apis.presentation.createOutlines(topic),
  },
  create: {
    mutationKey: queryKeys.presentation.create.queryKey,
    mutationFn: ({ id, outlines }: { id: number; outlines: Outline[] }) => apis.presentation.create({ id, outlines }),
  },
} as const;
