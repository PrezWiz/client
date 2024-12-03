import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';
import { OutlineType, SlideType } from '@/types/presentation';

export const presentationMutations = {
  createOutlines: {
    mutationKey: queryKeys.presentation.createOutlines.queryKey,
    mutationFn: (topic: string) => apis.presentation.createOutlines(topic),
  },
  create: {
    mutationKey: queryKeys.presentation.create.queryKey,
    mutationFn: ({ id, outlines }: { id: number; outlines: OutlineType[] }) =>
      apis.presentation.create({ id, outlines }),
  },
  update: {
    mutationKey: queryKeys.presentation.update.queryKey,
    mutationFn: ({ id, slides }: { id: number; slides: SlideType[] }) => apis.presentation.update({ id, slides }),
  },
  script: {
    mutationKey: (id: number) => queryKeys.presentation.script(id).queryKey,
    mutationFn: ({ id, slides }: { id: number; slides: SlideType[] }) => apis.presentation.script({ id, slides }),
  },
} as const;
