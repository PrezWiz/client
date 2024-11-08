import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import LoginForm from './LoginForm';
import SocialLoginButton from './SocialLoginButton';

const LoginDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="align-middle">
          로그인
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[350px]">
        <DialogHeader>
          <DialogTitle style={{ textAlign: 'center' }}>로그인</DialogTitle>
        </DialogHeader>
        <LoginForm />
        <SocialLoginButton />
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
