import { Provider as JotaiProvider } from 'jotai';
import { ApiErrorBoundary } from '@/components/ErrorBoundary';
import { AuthProvider } from './AuthProvider';
import { QueryClientProvider } from './QueryClientProvider';
import { ThemeProvider } from './ThemeProvider';

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <JotaiProvider>
        <QueryClientProvider>
          <ApiErrorBoundary>
            <AuthProvider>{children}</AuthProvider>
          </ApiErrorBoundary>
        </QueryClientProvider>
      </JotaiProvider>
    </ThemeProvider>
  );
};

export default Providers;
