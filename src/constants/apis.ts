export const apiPaths = {
  auth: {
    login: '/login',
    register: '/member',
  },
  presentation: {
    slides: '/store',
    createOutlines: '/prez/prototype',
    create: '/prez/slides',
  },
  contact: {
    sendMessage: '/contact',
  },
} as const;
