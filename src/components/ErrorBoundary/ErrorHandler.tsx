import { Suspense } from 'react';
import Loading from '@/components/common/Loading';
import ApiErrorBoundary from './ApiErrorBoundary';

type Props = {
  children: React.ReactNode;
};

const ErrorHandler = ({ children }: Props) => {
  return (
    <ApiErrorBoundary>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ApiErrorBoundary>
  );
};

export default ErrorHandler;
