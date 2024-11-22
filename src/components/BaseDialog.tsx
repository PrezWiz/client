import { StrictPropsWithChildren } from '@/types/common';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export type BaseDialogProps = {
  title: string;
  trigger?: React.ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  description?: string;
};

/**
 * Dialog 컴포넌트
 * @warning * DialogDescription은 description이 없더라도 렌더링 되어야 합니다.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#description
 */
const BaseDialog = ({
  title,
  children,
  trigger,
  className,
  open,
  onOpenChange,
  description,
}: StrictPropsWithChildren<BaseDialogProps>) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className={className} aria-describedby={title}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
