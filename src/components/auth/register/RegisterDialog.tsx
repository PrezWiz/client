import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import RegisterForm from './RegisterForm';

const RegisterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="align-middle">
          회원가입
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>회원가입</DialogTitle>
        </DialogHeader>
        <RegisterForm />
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
