import { memo } from 'react';
import DeleteAccountForm from '@/components/auth/account/DeleteAccountForm';
import BaseDialog, { BaseDialogProps } from '@/components/common/BaseDialog';

type DeleteAccountDialogProps = Pick<BaseDialogProps, 'open' | 'onOpenChange'>;

const DeleteAccountDialog = ({ open, onOpenChange }: DeleteAccountDialogProps) => {
  return (
    <BaseDialog
      title="회원 탈퇴"
      description="모든 정보가 삭제되며 복구할 수 없어요"
      className="sm:max-w-[350px]"
      open={open}
      onOpenChange={onOpenChange}
    >
      <DeleteAccountForm />
    </BaseDialog>
  );
};

export default memo(DeleteAccountDialog);
