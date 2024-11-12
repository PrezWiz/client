'use client';

import { ErrorBoundary } from '@suspensive/react';
import { usePathname } from 'next/navigation';
import ErrorBoundaryFallback from './ErrorBoundaryFallback';

type Props = React.PropsWithChildren;

const GlobalErrorBoundary = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <ErrorBoundary resetKeys={[pathname]} fallback={ErrorBoundaryFallback}>
      {children}
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
