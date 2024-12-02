import { createQueryKeyStore } from '@lukemorales/query-key-factory';

const queryKeys = createQueryKeyStore({
  auth: {
    login: null,
    register: null,
  },
  presentation: {
    slides: null,
    createOutlines: null,
    create: null,
    update: null,
    slide: null,
  },
  contact: {
    sendMessage: null,
  },
});

export { queryKeys };
