import { apis } from '@/apis';
import { queryKeys } from '@/libs/queryKeys';

export const contactMutations = {
  sendMessage: {
    mutationKey: queryKeys.contact.sendMessage.queryKey,
    mutationFn: (message: string) => apis.contact.sendMessage({ message }),
  },
} as const;
