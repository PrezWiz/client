'use client';

import { useEffect } from 'react';
import { verifySession } from '@/lib/auth/session';
import { useSetIsLoggedInAtom } from '@/stores/auth';

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const setIsLoggedIn = useSetIsLoggedInAtom();

  useEffect(() => {
    const setUser = async () => {
      const session = await verifySession();
      console.log('@@', session);

      if (session) {
        setIsLoggedIn(true);
        return;
      }

      setIsLoggedIn(false);
    };

    setUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export { UserProvider };
