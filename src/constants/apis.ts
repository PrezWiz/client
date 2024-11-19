export const apiPaths = {
  auth: {
    login: '/login',
    register: '/member',
  },
  slide: {
    slides: '/store',
    createOutlines: '/prez/prototype',
    create: '/prez/slides',
  },
} as const;
