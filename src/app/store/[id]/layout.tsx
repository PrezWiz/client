import { StrictPropsWithChildren } from '@/types/common';

const StoreDetailLayout = ({ children }: StrictPropsWithChildren) => {
  return <main className="container mx-auto max-w-6xl px-4 py-12">{children}</main>;
};

export default StoreDetailLayout;
