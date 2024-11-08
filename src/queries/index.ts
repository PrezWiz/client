import { authMutations } from './auth/mutations';

export const mutations = {
  auth: authMutations,
} as const;
