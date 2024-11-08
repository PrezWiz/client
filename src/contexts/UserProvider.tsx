'use client';

import { useHydrateAtoms } from 'jotai/utils';
import { isLoggedInAtom } from '@/stores/auth';
import { SessionType, userAtom } from '@/stores/user';

const UserProvider = ({ children, session }: { children: React.ReactNode; session: SessionType | undefined }) => {
  useHydrateAtoms([[isLoggedInAtom, session ? true : false]]);
  useHydrateAtoms([[userAtom, session]]);

  return <>{children}</>;
};

export default UserProvider;
