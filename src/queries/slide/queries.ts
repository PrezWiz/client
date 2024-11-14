import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';

export const slideQueries = {
  slides: {
    queryKey: queryKeys.slide.slides.queryKey,
    queryFn: () => apis.slide.slides(),
  },
} as const;
