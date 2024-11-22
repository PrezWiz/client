import NotSupported from '@/components/common/NotSupported';
import { StrictPropsWithChildren } from '@/types/common';

const CreateLayout = ({ children }: StrictPropsWithChildren) => {
  return (
    <>
      <NotSupported />
      {children}
    </>
  );
};

export default CreateLayout;
