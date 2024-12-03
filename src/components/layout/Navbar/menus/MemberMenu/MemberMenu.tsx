import { ChangePasswordDialog } from '@/components/layout/Navbar/dialogs';
import DeleteAccountDialog from '@/components/layout/Navbar/dialogs/DeleteAccountDialog';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import useLogoutAction from '@/hooks/useLogoutAction';
import useMemberMenuActions from '@/hooks/useMemberMenuActions';
import Components from './Components';

const MemberMenu = () => {
  const { changePasswordOpen, setChangePasswordOpen, deleteAccountOpen, setDeleteAccountOpen } = useMemberMenuActions();
  const { onLogout } = useLogoutAction();

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
