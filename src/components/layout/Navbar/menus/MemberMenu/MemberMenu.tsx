import React from 'react';
import { ChangePasswordDialog } from '@/components/layout/Navbar/dialogs';
import DeleteAccountDialog from '@/components/layout/Navbar/dialogs/DeleteAccountDialog';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import useMemberActions from '@/hooks/useMemberActions';
import Components from './Components';

const MemberMenu = () => {
  const { changePasswordOpen, setChangePasswordOpen, deleteAccountOpen, setDeleteAccountOpen, logout } =
    useMemberActions();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Components.MenuButton />
        </DropdownMenuTrigger>
        <Components.MenuItems
          onChangePassword={() => setChangePasswordOpen(true)}
          onDeleteAccount={() => setDeleteAccountOpen(true)}
          onLogout={logout}
        />
      </DropdownMenu>
      <ChangePasswordDialog open={changePasswordOpen} onOpenChange={setChangePasswordOpen} />
      <DeleteAccountDialog open={deleteAccountOpen} onOpenChange={setDeleteAccountOpen} />
    </>
  );
};

export default MemberMenu;
