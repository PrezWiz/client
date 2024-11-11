import BaseDialog from '@/components/BaseDialog';
import { Button } from '@/components/ui/button';
import LoginForm from './LoginForm';
import SocialLoginButton from './SocialLoginButton';

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
      <SocialLoginButton />
    </BaseDialog>
  );
};

export default LoginDialog;
