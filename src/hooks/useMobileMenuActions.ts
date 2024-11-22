'use client';

import { useEffect, useState } from 'react';

const useMobileMenuActions = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle('body-scroll-hidden', isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return {
    isMobileMenuOpen,
    handleMenuClose,
    handleToggleMobileMenu,
  };
};

export default useMobileMenuActions;
