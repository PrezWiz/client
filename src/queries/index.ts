import { authMutations } from './auth';
import { slideMutations, slideQueries } from './slide';

export const mutations = {
  auth: authMutations,
  slide: slideMutations,
} as const;

export const queries = {
  slide: slideQueries,
} as const;
