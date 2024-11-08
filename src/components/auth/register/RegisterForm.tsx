'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { mutations } from '@/queries';
import { registerSchema } from '@/schemas/auth';
import SuccessMessage from './SuccessMessage';
import type { z } from 'zod';

const defaultValues = {
  email: '',
  password: '',
};

const RegisterForm = () => {
  const [complete, setComplete] = useState<boolean>(false);

  const { mutateAsync } = useMutation({
    ...mutations.auth.register,
    onSuccess: () => {
      setComplete(true);
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    await mutateAsync(values);
  };

  const form = useForm<z.infer<typeof registerSchema>>({
    defaultValues,
    resolver: zodResolver(registerSchema),
  });

  const { control, handleSubmit } = form;

  if (complete) {
    return <SuccessMessage />;
  }

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
                <Input placeholder="비밀번호를 입력해주세요" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-4 items-center gap-4">
          <Button type="submit" className="col-start-4">
            확인
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
