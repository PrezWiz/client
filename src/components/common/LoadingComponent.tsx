import { StrictPropsWithChildren } from '@/types/common';

const LoadingComponent = ({
  isLoading,
  fallback,
  children,
}: StrictPropsWithChildren<{ isLoading: boolean; fallback: React.ReactNode }>) => {
  return isLoading ? fallback : children;
};

export default LoadingComponent;
