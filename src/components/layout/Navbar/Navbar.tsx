'use client';

import { useEffect, useState } from 'react';
import { useIsLoggedInAtomValue } from '@/stores/auth';
import Components from './Components';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = useIsLoggedInAtomValue();

  const handleMenuClose = async () => {
    setIsMobileMenuOpen(false);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

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
