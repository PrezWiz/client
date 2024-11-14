import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';

export const slideMutations = {
  create: {
    mutationKey: queryKeys.slide.create.queryKey,
    mutationFn: (topic: string) => apis.slide.create(topic),
  },
} as const;
