'use client';

import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { mutations } from '@/queries';
import { changePasswordSchema } from '@/schemas/auth';
import { useSetIsLoggedInAtom } from '@/stores/auth';
import type { z } from 'zod';

const defaultValues = {
  password: '',
  newPassword: '',
};

const ChangePasswordForm = () => {
  const setIsLoggedIn = useSetIsLoggedInAtom();

  const { mutateAsync } = useMutation({
    ...mutations.auth.login,
    onSuccess: () => {
      setIsLoggedIn(true);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      //TODO : 전역 에러 처리
      toast.error(error?.response?.data?.message);
    },
  });

  const form = useForm<z.infer<typeof changePasswordSchema>>({
    defaultValues,
    resolver: zodResolver(changePasswordSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = async (values: z.infer<typeof changePasswordSchema>) => {
    await mutateAsync(values);
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input placeholder="비밀번호를 입력해주세요" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>새로운 비밀번호</FormLabel>
              <FormControl>
                <Input placeholder="변경할 비밀번호를 입력해주세요" type="password" {...field} />
              </FormControl>
              <FormDescription className="text-xs text-muted-foreground">
                * 영문, 숫자, 특수문자 포함 8자 이상 입력해주세요
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          비밀번호 변경하기
        </Button>
      </form>
    </Form>
  );
};

export default ChangePasswordForm;
