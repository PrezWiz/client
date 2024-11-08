'use client';

import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { mutations } from '@/queries';
import { loginSchema } from '@/schemas/auth';
import { useSetIsLoggedInAtom } from '@/stores/auth';
import type { z } from 'zod';

const defaultValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
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

  const form = useForm<z.infer<typeof loginSchema>>({
    defaultValues,
    resolver: zodResolver(loginSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    await mutateAsync(values);
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="이메일을 입력해주세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input placeholder="비밀번호를 입력해주세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          로그인
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
