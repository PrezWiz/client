import { StrictPropsWithChildren } from '@/types/common';
import Loading from './Loading';

type ShowProps = {
  when: boolean;
  fallback?: React.ReactNode;
  loading?: boolean;
};

const Show = ({ when, children, fallback, loading }: StrictPropsWithChildren<ShowProps>) => {
  if (loading) return <Loading />;
  if (!when) return fallback || null;
  return <>{children}</>;
};

export default Show;
