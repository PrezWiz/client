import { authMutations } from './auth';
import { presentationMutations, presentationQueries } from './presentation';

export const mutations = {
  auth: authMutations,
  presentation: presentationMutations,
} as const;

export const queries = {
  presentation: presentationQueries,
} as const;
