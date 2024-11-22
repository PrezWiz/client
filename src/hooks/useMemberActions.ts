'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';
import { deleteSession } from '@/libs/auth/session';
import { useSetIsLoggedInAtom } from '@/stores/auth';

const useMemberActions = () => {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  const setIsLoggedIn = useSetIsLoggedInAtom();

  const logout = () => {
    deleteSession();
    setIsLoggedIn(false);
    redirect('/');
  };

  return {
    changePasswordOpen,
    setChangePasswordOpen,
    deleteAccountOpen,
    setDeleteAccountOpen,
    logout,
  };
};

export default useMemberActions;
