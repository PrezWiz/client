import LoginForm from '@/components/auth/login/LoginForm';
import SnsLoginForm from '@/components/auth/login/SnsLoginForm';
import BaseDialog from '@/components/common/BaseDialog';
import { Button } from '@/components/ui/button';

const LoginDialog = () => {
  return (
    <BaseDialog
      title="로그인"
      className="sm:max-w-[350px]"
      trigger={
        <Button variant="outline" className="align-middle">
          로그인
        </Button>
      }
    >
      <LoginForm />
      <SnsLoginForm />
    </BaseDialog>
  );
};

export default LoginDialog;
