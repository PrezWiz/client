import { memo } from 'react';
import ChangePasswordForm from '@/components/auth/account/ChangePasswordForm';
import BaseDialog, { BaseDialogProps } from '@/components/BaseDialog';

type ChangePasswordDialogProps = Pick<BaseDialogProps, 'open' | 'onOpenChange'>;

const ChangePasswordDialog = ({ open, onOpenChange }: ChangePasswordDialogProps) => {
  return (
    <BaseDialog title="비밀번호 변경" className="sm:max-w-[425px]" open={open} onOpenChange={onOpenChange}>
      <ChangePasswordForm />
    </BaseDialog>
  );
};

export default memo(ChangePasswordDialog);
