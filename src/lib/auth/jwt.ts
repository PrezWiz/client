'use server';
import { jwtVerify } from 'jose';
import { JWSSignatureVerificationFailed, JWTExpired } from 'jose/errors';
import { SessionType } from '@/stores/user';
import { deleteSession } from './session';

const secretKey = process.env.JWT_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

/**
 * JWT 검증하고 유효한 경우 페이로드를 반환 (만료시간도 같이 검증)
 */
export const verifyToken = async (session: string | undefined = '') => {
  try {
    const { payload } = await jwtVerify<SessionType>(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    if (error instanceof JWTExpired) {
      deleteSession();
      console.log('@@ 만료');
    }

    if (error instanceof JWSSignatureVerificationFailed) {
      console.log('@@ 서명 검증 실패');
    }

    return null;
  }
};
