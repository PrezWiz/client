import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';

export const presentationQueries = {
  slides: {
    queryKey: queryKeys.presentation.slides.queryKey,
    queryFn: () => apis.presentation.slides(),
  },
} as const;
