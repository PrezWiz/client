'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useChangePassword from '@/hooks/useChangePassword';

const ChangePasswordForm = () => {
  const { form, onSubmit } = useChangePassword();
  const { control, handleSubmit } = form;

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="currentPassword"
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
