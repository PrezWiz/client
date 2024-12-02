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
    slide: (id: number) => [id],
  },
  contact: {
    sendMessage: null,
  },
});

export { queryKeys };
