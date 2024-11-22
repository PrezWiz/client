import RegisterForm from '@/components/auth/register/RegisterForm';
import BaseDialog from '@/components/common/BaseDialog';
import { Button } from '@/components/ui/button';

const RegisterDialog = () => {
  return (
    <BaseDialog
      title="회원가입"
      className="sm:max-w-[425px]"
      trigger={
        <Button variant="default" className="align-middle">
          회원가입
        </Button>
      }
    >
      <RegisterForm />
    </BaseDialog>
  );
};

export default RegisterDialog;
