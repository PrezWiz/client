export const apiPaths = {
  auth: {
    login: '/login',
    register: '/member',
  },
  presentation: {
    slides: '/store',
    createOutlines: '/slide-outline',
    create: '/slides',
    update: '/slides',
  },
  contact: {
    sendMessage: '/contact',
  },
} as const;
