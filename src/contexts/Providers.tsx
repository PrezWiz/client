'use client';

import { Provider as JotaiProvider } from 'jotai';
import { QueryClientProvider } from './QueryClientProvider';
import { ThemeProvider } from './ThemeProvider';
const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <JotaiProvider>
        <QueryClientProvider>{children}</QueryClientProvider>
      </JotaiProvider>
    </ThemeProvider>
  );
};

export default Providers;
