import { authApis } from './auth';
import { slideApis } from './slide';

export const apis = {
  auth: authApis,
  slide: slideApis,
} as const;
