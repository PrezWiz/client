import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';
import { CreateSlidesRequest, ScriptRequest, UpdateSlidesRequest } from '@/types/presentation';

export const presentationMutations = {
  createOutlines: {
    mutationKey: queryKeys.presentation.createOutlines.queryKey,
    mutationFn: (topic: string) => apis.presentation.createOutlines(topic),
  },
  create: {
    mutationKey: queryKeys.presentation.create.queryKey,
    mutationFn: (payload: CreateSlidesRequest) => apis.presentation.create(payload),
  },
  update: {
    mutationKey: queryKeys.presentation.update.queryKey,
    mutationFn: (payload: UpdateSlidesRequest) => apis.presentation.update(payload),
  },
  script: {
    mutationKey: (id: number) => queryKeys.presentation.script(id).queryKey,
    mutationFn: (payload: ScriptRequest) => apis.presentation.script(payload),
  },
} as const;
