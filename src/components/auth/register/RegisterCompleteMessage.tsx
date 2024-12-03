import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';

const RegisterCompleteMessage = () => {
  return (
    <div className="gap-4 space-y-4 py-4">
      <p className="text-md">계정이 생성되었어요 로그인을 진행해주세요.</p>
      <div className="grid grid-cols-4 items-center gap-4">
        <DialogClose asChild>
          <Button className="col-start-4">확인</Button>
        </DialogClose>
      </div>
    </div>
  );
};

export default RegisterCompleteMessage;
