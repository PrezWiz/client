export const apiPaths = {
  auth: {
    login: '/login',
    register: '/member',
  },
  presentation: {
    slides: '/store',
    createOutlines: '/slide-outlines',
    create: '/slides',
  },
  contact: {
    sendMessage: '/contact',
  },
} as const;
