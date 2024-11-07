'use client';

import { ThemeProvider as BaseThemeProvider } from 'next-themes';
import { settings } from '@/config/settings';

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const defaultTheme = settings.themeToggleEnabled ? 'system' : 'light';

  return (
    <BaseThemeProvider enableSystem attribute="class" defaultTheme={defaultTheme}>
      {children}
    </BaseThemeProvider>
  );
};

export { ThemeProvider };
