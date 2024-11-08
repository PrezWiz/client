'use client';

import { redirect } from 'next/navigation';
import { FiKey, FiLogOut, FiUser, FiXCircle } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { deleteSession } from '@/lib/auth/session';
import { useSetIsLoggedInAtom } from '@/stores/auth';

const MemberMenu = () => {
  const setIsLoggedIn = useSetIsLoggedInAtom();

  const logout = () => {
    deleteSession();
    setIsLoggedIn(false);
    redirect('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="align-middle">
          <FiUser className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <FiKey className="mr-2 h-4 w-4" />
            <span>비밀번호 변경</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FiXCircle className="mr-2 h-4 w-4" />
            <span>회원 탈퇴</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={logout}>
            <FiLogOut className="mr-2 h-4 w-4" />
            <span>로그아웃</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MemberMenu;
