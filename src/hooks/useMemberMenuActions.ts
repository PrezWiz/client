'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';
import { deleteSession } from '@/libs/auth/session';
import { useSetIsLoggedInAtom } from '@/stores/auth';

const useMemberMenuActions = () => {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  const setIsLoggedIn = useSetIsLoggedInAtom();

  const onLogout = () => {
    deleteSession();
    setIsLoggedIn(false);
    redirect('/');
  };

  return {
    changePasswordOpen,
    setChangePasswordOpen,
    deleteAccountOpen,
    setDeleteAccountOpen,
    onLogout,
  };
};

export default useMemberMenuActions;
