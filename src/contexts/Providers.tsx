import { Provider as JotaiProvider } from 'jotai';
import { AuthProvider } from './AuthProvider';
import { QueryClientProvider } from './QueryClientProvider';
import { ThemeProvider } from './ThemeProvider';

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <JotaiProvider>
        <QueryClientProvider>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </JotaiProvider>
    </ThemeProvider>
  );
};

export default Providers;
