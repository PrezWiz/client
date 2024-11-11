'use client';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from '@suspensive/react';
import { usePathname } from 'next/navigation';
import ApiErrorFallback from './ApiErrorFallback';

type Props = React.PropsWithChildren;

const ApiErrorBoundary = ({ children }: Props) => {
  const { reset } = useQueryErrorResetBoundary();
  const pathname = usePathname();

  return (
    <ErrorBoundary
      resetKeys={[pathname]}
      fallback={fallbackProps => <ApiErrorFallback {...fallbackProps} />}
      onReset={reset}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ApiErrorBoundary;
