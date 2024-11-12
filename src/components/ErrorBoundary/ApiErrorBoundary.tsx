'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from '@suspensive/react';
import { usePathname } from 'next/navigation';
import ErrorBoundaryFallback from './ErrorBoundaryFallback';

type Props = React.PropsWithChildren;

const ApiErrorBoundary = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary resetKeys={[pathname]} fallback={ErrorBoundaryFallback} onReset={reset}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ApiErrorBoundary;
