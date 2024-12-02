import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';

export const presentationQueries = {
  slides: {
    queryKey: queryKeys.presentation.slides.queryKey,
    queryFn: () => apis.presentation.slides(),
  },
  slide: {
    queryKey: queryKeys.presentation.slide.queryKey,
    queryFn: (id: number) => apis.presentation.slide(id),
  },
} as const;
