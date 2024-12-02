export const apiPaths = {
  auth: {
    login: '/login',
    register: '/member',
  },
  presentation: {
    slides: '/store',
    createOutlines: '/slide-outline',
    slide: '/slides',
    create: '/slides',
    update: '/slides',
  },
  contact: {
    sendMessage: '/contact',
  },
} as const;
