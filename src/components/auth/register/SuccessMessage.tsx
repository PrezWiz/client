import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';

const SuccessMessage = () => {
  return (
    <div className="gap-4 space-y-4 py-4">
      <div>계정이 생성되었습니다. 로그인을 진행해주세요</div>
      <div className="grid grid-cols-4 items-center gap-4">
        <DialogClose asChild>
          <Button className="col-start-4">확인</Button>
        </DialogClose>
      </div>
    </div>
  );
};

export default SuccessMessage;
