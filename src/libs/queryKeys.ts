import { createQueryKeyStore } from '@lukemorales/query-key-factory';

const queryKeys = createQueryKeyStore({
  auth: {
    login: null,
    register: null,
  },
  slide: {
    slides: null,
    create: null,
  },
});

export { queryKeys };
