import { Provider as JotaiProvider } from 'jotai';
import GlobalErrorBoundary from '@/components/ErrorBoundary/GlobalErrorBoundary';
import { AuthProvider } from './AuthProvider';
import { QueryClientProvider } from './QueryClientProvider';
import { ThemeProvider } from './ThemeProvider';

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <GlobalErrorBoundary>
        <JotaiProvider>
          <QueryClientProvider>
            <AuthProvider>{children}</AuthProvider>
          </QueryClientProvider>
        </JotaiProvider>
      </GlobalErrorBoundary>
    </ThemeProvider>
  );
};

export default Providers;
