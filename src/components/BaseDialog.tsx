import { StrictPropsWithChildren } from '@/types/common';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

type Props = {
  title: string;
  trigger: React.ReactNode;
  className?: string;
};

const BaseDialog = ({ title, children, trigger, className }: StrictPropsWithChildren<Props>) => {
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
