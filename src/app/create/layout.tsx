import NotSupported from '@/components/common/NotSupported';

const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NotSupported />
      {children}
    </>
  );
};

export default CreateLayout;
