'use client';

import { Provider } from 'jotai';
import { ThemeProvider } from './ThemeProvider';
const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <Provider>{children}</Provider>
    </ThemeProvider>
  );
};

export default Providers;
