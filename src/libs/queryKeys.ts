import { createQueryKeyStore } from '@lukemorales/query-key-factory';

const queryKeys = createQueryKeyStore({
  auth: {
    login: null,
    register: null,
  },
  slide: {
    slides: null,
    createOutlines: null,
    create: null,
  },
});

export { queryKeys };
