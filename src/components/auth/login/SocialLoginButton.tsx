import { Icons } from '@/components/Icons';

const REST_API_KEY = process.env.KAKAO_AUTH_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_AUTH_REDIRECT_URL;
const LOGIN_LINK = `
https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}
&redirect_uri=${REDIRECT_URI}
`;

const SocialLoginButton = () => {
  return (
    <a
      href={LOGIN_LINK}
      className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#fee502] px-4 py-2 text-sm font-medium text-[#3e1c1e] ring-offset-background transition-colors hover:bg-[#fee502]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      <Icons.kakao />
      <span>카카오 로그인</span>
    </a>
  );
};

export default SocialLoginButton;
