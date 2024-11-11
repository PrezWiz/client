import BaseDialog from '@/components/BaseDialog';
import { Button } from '@/components/ui/button';
import RegisterForm from './RegisterForm';

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
