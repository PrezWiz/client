import React from 'react';
import { ChangePasswordDialog } from '@/components/layout/Navbar/dialogs';
import DeleteAccountDialog from '@/components/layout/Navbar/dialogs/DeleteAccountDialog';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import useMemberMenuActions from '@/hooks/useMemberMenuActions';
import Components from './Components';

const MemberMenu = () => {
  const { changePasswordOpen, setChangePasswordOpen, deleteAccountOpen, setDeleteAccountOpen, onLogout } =
    useMemberMenuActions();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Components.MenuButton />
        </DropdownMenuTrigger>
        <Components.MenuItems
          onChangePassword={() => setChangePasswordOpen(true)}
          onDeleteAccount={() => setDeleteAccountOpen(true)}
          onLogout={onLogout}
        />
      </DropdownMenu>
      <ChangePasswordDialog open={changePasswordOpen} onOpenChange={setChangePasswordOpen} />
      <DeleteAccountDialog open={deleteAccountOpen} onOpenChange={setDeleteAccountOpen} />
    </>
  );
};

export default MemberMenu;
