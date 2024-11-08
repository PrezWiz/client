const REST_API_KEY = process.env.KAKAO_AUTH_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_AUTH_REDIRECT_URL;
const LOGIN_LINK = `
https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}
&redirect_uri=${REDIRECT_URI}
`;

const SocialLoginButton = () => {
  return (
    <a href={LOGIN_LINK}>
      <img src="kakao_login_medium_wide.png" className="w-full" />
    </a>
  );
};

export default SocialLoginButton;
