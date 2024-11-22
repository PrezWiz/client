import { StrictPropsWithChildren } from '@/types/common';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

type BaseDialogProps = {
  title: string;
  trigger: React.ReactNode;
  className?: string;
};

const BaseDialog = ({ title, children, trigger, className }: StrictPropsWithChildren<BaseDialogProps>) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
