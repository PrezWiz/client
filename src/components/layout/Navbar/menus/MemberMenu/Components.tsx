import { forwardRef } from 'react';
import { FiKey, FiLogOut, FiUser, FiXCircle } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const MenuButton = forwardRef<HTMLButtonElement>((props, ref) => (
  <Button variant="outline" size="icon" className="align-middle" ref={ref} {...props}>
    <FiUser className="h-6 w-6" />
  </Button>
));

MenuButton.displayName = 'MenuButton';

type MemberMenuItemsProps = {
  onChangePassword: () => void;
  onDeleteAccount: () => void;
  onLogout: () => void;
};

const MenuItems = ({ onChangePassword, onDeleteAccount, onLogout }: MemberMenuItemsProps) => (
  <DropdownMenuContent className="w-56">
    <DropdownMenuGroup>
      <DropdownMenuItem onClick={onChangePassword}>
        <FiKey className="mr-2 h-4 w-4" />
        <span>비밀번호 변경</span>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onDeleteAccount}>
        <FiXCircle className="mr-2 h-4 w-4" />
        <span>회원 탈퇴</span>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem onClick={onLogout}>
        <FiLogOut className="mr-2 h-4 w-4" />
        <span>로그아웃</span>
      </DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
);

const Components = {
  MenuItems,
  MenuButton,
};

export default Components;
