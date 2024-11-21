import { authApis } from './auth';
import { presentationApis } from './presentation';

export const apis = {
  auth: authApis,
  presentation: presentationApis,
} as const;
