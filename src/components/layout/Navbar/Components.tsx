'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/metadata';
import { navLinks } from '@/config/nav-links';
import { StrictPropsWithChildren } from '@/types/common';
import { cn } from '@/utils/styles';
import { GuestMenu, MemberMenu, ThemeToggleMenu } from './menus';

const Wrapper = ({ children }: StrictPropsWithChildren) => {
  return (
    <header className="select-none justify-between px-4 py-5 md:flex md:items-center md:px-8 lg:max-w-7xl">
      {children}
    </header>
  );
};

type SiteLogoProps = {
  onClick: () => void;
};

const SiteLogo = ({ onClick }: SiteLogoProps) => {
  return (
    <Link
      href="/"
      className="flex flex-row items-center gap-2 text-primary duration-200 lg:hover:scale-[1.10]"
      onClick={onClick}
    >
      <Image src="/logo.svg" className="dark:brightness-0 dark:invert-[1]" alt="Logo" width={40} height={40} />
      <h1 className="text-2xl font-bold">{siteConfig.name}</h1>
    </Link>
  );
};

type NavMenuButtonProps = {
  onClick: () => void;
  isMobileMenuOpen: boolean;
};

const MobileMenuButton = ({ onClick, isMobileMenuOpen }: NavMenuButtonProps) => {
  return (
    <Button variant="outline" size="icon" className="align-middle md:hidden" onClick={onClick}>
      {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </Button>
  );
};

type MenusProps = {
  isLoggedIn: boolean;
};

const Menus = ({ isLoggedIn }: MenusProps) => {
  return (
    <div className="mt-6 flex justify-center space-x-4 md:mt-0">
      {isLoggedIn ? <MemberMenu /> : <GuestMenu />}
      <ThemeToggleMenu />
    </div>
  );
};

type NavLinksProps = {
  isMobileMenuOpen: boolean;
  onClick: () => void;
};

const NavLinks = ({ isMobileMenuOpen, onClick }: NavLinksProps) => {
  return (
    <nav
      className={cn(
        'absolute inset-x-0 z-10 w-full max-w-xs justify-self-center rounded-md border bg-background p-4 md:static md:mt-0 md:block md:border-none md:p-0',
        isMobileMenuOpen ? 'block' : 'hidden'
      )}
    >
      <ul
        className="flex flex-col items-center justify-center gap-4 text-primary opacity-60 md:flex-row md:gap-6"
        onClick={onClick}
      >
        {navLinks.map(link => (
          <li key={link.route}>
            <Link className="hover:underline" href={link.path}>
              {link.route}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Components = {
  Wrapper,
  SiteLogo,
  MobileMenuButton,
  Menus,
  NavLinks,
};

export default Components;
