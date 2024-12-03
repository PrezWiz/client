import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { mutations } from '@/queries';
import { changePasswordSchema } from '@/schemas/auth';
import { ApiErrorResponse } from '@/types/apis';
import type { z } from 'zod';

const defaultValues = {
  currentPassword: '',
  newPassword: '',
};

const useChangePassword = () => {
  const form = useForm<z.infer<typeof changePasswordSchema>>({
    defaultValues,
    resolver: zodResolver(changePasswordSchema),
  });

  const handleError = (error: ApiErrorResponse) => {
    const errorCode = error?.response?.data?.code || 9999;

    if (errorCode === 2003) {
      form.setError('currentPassword', {
        message: '비밀번호가 일치하지 않아요.',
      });
      return;
    }

    toast.error(ERROR_MESSAGE[errorCode] || ERROR_MESSAGE[9999]);
  };

  const { mutateAsync } = useMutation({
    ...mutations.auth.changePassword,
    onSuccess: () => {
      toast.success('비밀번호가 변경되었어요.');
    },
    onError: handleError,
  });

  const onSubmit = async (values: z.infer<typeof changePasswordSchema>) => {
    await mutateAsync(values);
  };

  return {
    form,
    onSubmit,
  };
};

export default useChangePassword;
