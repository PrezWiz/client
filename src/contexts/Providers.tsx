'use client';

import { Provider as JotaiProvider } from 'jotai';
import { QueryClientProvider } from './QueryClientProvider';
import { ThemeProvider } from './ThemeProvider';
import { UserProvider } from './UserProvider';

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <JotaiProvider>
        <QueryClientProvider>
          <UserProvider>{children}</UserProvider>
        </QueryClientProvider>
      </JotaiProvider>
    </ThemeProvider>
  );
};

export default Providers;
