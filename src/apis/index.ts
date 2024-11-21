import { authApis } from './auth';
import { contactApis } from './contact';
import { presentationApis } from './presentation';

export const apis = {
  auth: authApis,
  presentation: presentationApis,
  contact: contactApis,
} as const;
