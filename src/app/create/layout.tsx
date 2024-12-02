import NotSupported from '@/components/common/NotSupported';
import { StrictPropsWithChildren } from '@/types/common';
import { getIsProduction } from '@/utils/environment';

const CreateLayout = ({ children }: StrictPropsWithChildren) => {
  const isProduction = getIsProduction();

  return (
    <>
      {isProduction && <NotSupported />}
      {children}
    </>
  );
};

export default CreateLayout;
