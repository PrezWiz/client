import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';

export const presentationQueries = {
  slides: {
    queryKey: queryKeys.presentation.slides.queryKey,
    queryFn: () => apis.presentation.slides(),
  },
  slide: {
    queryKey: (id: number) => queryKeys.presentation.slide(id).queryKey,
    queryFn: (id: number) => apis.presentation.slide(id),
  },
} as const;
