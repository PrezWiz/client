'use client';

import useMobileMenuActions from '@/hooks/useMobileMenuActions';
import { useIsLoggedInAtomValue } from '@/stores/auth';
import Components from './Components';

const Navbar = () => {
  const { isMobileMenuOpen, handleMenuClose, handleToggleMobileMenu } = useMobileMenuActions();
  const isLoggedIn = useIsLoggedInAtomValue();

  return (
    <Components.Wrapper>
      <div className="flex flex-row justify-between">
        <Components.SiteLogo onClick={handleMenuClose} />
        <Components.MobileMenuButton isMobileMenuOpen={isMobileMenuOpen} onClick={handleToggleMobileMenu} />
      </div>
      {isLoggedIn && <Components.NavLinks isMobileMenuOpen={isMobileMenuOpen} onClick={handleMenuClose} />}
      <Components.Menus isLoggedIn={isLoggedIn} />
    </Components.Wrapper>
  );
};

export default Navbar;
