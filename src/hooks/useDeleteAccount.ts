'use client';

import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { mutations } from '@/queries';
import { deleteAccountSchema } from '@/schemas/auth';
import useLogoutAction from './useLogoutAction';

const defaultValues = {
  password: '',
};

const useDeleteAccount = () => {
  const { onLogout } = useLogoutAction();

  const { mutateAsync } = useMutation({
    ...mutations.auth.deleteAccount,
    onSuccess: () => {
      onLogout();
      toast.success('계정 삭제가 완료되었어요.');
    },
  });

  const form = useForm<z.infer<typeof deleteAccountSchema>>({
    defaultValues,
    // resolver: zodResolver(deleteAccountSchema),
  });

  const onSubmit = async () => {
    await mutateAsync();
  };

  return { form, onSubmit };
};

export default useDeleteAccount;
