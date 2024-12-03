'use client';

import { useRouter } from 'next/navigation';
import { deleteSession } from '@/libs/auth/session';
import { useSetIsLoggedInAtom } from '@/stores/auth';

const useLogoutAction = () => {
  const setIsLoggedIn = useSetIsLoggedInAtom();
  const router = useRouter();

  const onLogout = () => {
    deleteSession();
    setIsLoggedIn(false);
    router.push('/');
    router.refresh();
  };

  return {
    onLogout,
  };
};

export default useLogoutAction;
