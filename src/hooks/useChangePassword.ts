import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { mutations } from '@/queries';
import { changePasswordSchema } from '@/schemas/auth';
import { ApiErrorResponse } from '@/types/apis';
import { getFetchErrorCode, getFetchErrorMessage } from '@/utils/\bapis';
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
    const errorCode = getFetchErrorCode(error);
    const errorMessage = getFetchErrorMessage(error);

    if (errorCode === '2003') {
      form.setError('currentPassword', {
        message: ERROR_MESSAGE[errorCode],
      });
      return;
    }

    toast.error(errorMessage);
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
