'use client';

import { useTheme } from 'next-themes';
import { Icons } from '@/components/common/Icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { settings } from '@/config/settings';

const ThemeToggleMenu = () => {
  const { setTheme } = useTheme();

  if (!settings.themeToggleEnabled) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="align-middle">
          <Icons.sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>라이트</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>다크</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>시스템</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggleMenu;
