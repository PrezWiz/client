'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { mutations } from '@/queries';
import { useSetIsLoggedInAtom } from '@/stores/auth';

type env = string | undefined;

const LoginDialog = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setIsLoggedIn = useSetIsLoggedInAtom();
  const REST_API_KEY: env = process.env.KAKAO_AUTH_API_KEY;
  const REDIRECT_URI: env = process.env.NEXT_PUBLIC_KAKAO_AUTH_REDIRECT_URL;
  const LOGIN_LINK: env = `
  https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}
  &redirect_uri=${REDIRECT_URI}
  `;

  const { mutateAsync } = useMutation({
    ...mutations.auth.login,
    onSuccess: () => {
      setIsLoggedIn(true);
    },
    onError: error => {
      alert(error.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await mutateAsync({ email, password });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="align-middle">
          로그인
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[350px]">
        <DialogHeader>
          <DialogTitle style={{ textAlign: 'center' }}>로그인</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="items-center gap-4">
            <Label htmlFor="email" className="text-right">
              이메일
            </Label>
            <Input
              id="email"
              type="text"
              placeholder="이메일을 입력해 주세요"
              className="col-span-3 mt-1"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="items-center gap-4">
            <Label htmlFor="password" className="text-right">
              비밀번호
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              className="col-span-3 mt-1"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-3 w-full items-center gap-4">
            <Button type="submit" className="w-full">
              로그인
            </Button>
          </div>
          <div className="flex w-full flex-row justify-center">
            <a href={LOGIN_LINK}>
              <img src="kakao_login_medium_wide.png" className="w-full" />
            </a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
