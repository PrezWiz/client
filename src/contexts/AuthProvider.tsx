'use server';

import { verifySession } from '@/libs/auth/session';
import UserProvider from './UserProvider';

const AuthProvider = async ({ children }: { children: React.ReactNode }) => {
  const session = await verifySession();

  return <UserProvider session={session}>{children}</UserProvider>;
};

export { AuthProvider };
