import { authMutations } from './auth';
import { contactMutations } from './contact';
import { presentationMutations, presentationQueries } from './presentation';

export const mutations = {
  auth: authMutations,
  presentation: presentationMutations,
  contact: contactMutations,
} as const;

export const queries = {
  presentation: presentationQueries,
} as const;
