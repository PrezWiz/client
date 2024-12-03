'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import useDeleteAccount from '@/hooks/useDeleteAccount';

const DeleteAccountForm = () => {
  const { form, onSubmit } = useDeleteAccount();
  const { handleSubmit } = form;

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/** TODO: 추후 비밀번호 수집 필요 */}
        {/* <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input placeholder="가입 시 입력한 비밀번호를 입력해주세요" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit" variant="destructive" className="w-full">
          계정 삭제하기
        </Button>
      </form>
    </Form>
  );
};

export default DeleteAccountForm;
