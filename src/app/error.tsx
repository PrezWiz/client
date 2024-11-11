'use client';

import { Button } from '@/components/ui/button';

// TODO: Dialog 컴포넌트로 변경
const Error = ({ reset: handleReset }: { reset: () => void }) => {
  console.log('@@ error');

  return (
    <div className="flex items-center justify-center pt-40">
      <div className="rounded-lg bg-white p-8 text-center shadow-md">
        <strong className="mb-4 block text-2xl font-bold">문제가 발생했어요</strong>
        <p className="mb-6 text-gray-700">요청을 처리하는 중 오류가 발생했어요</p>
        <Button onClick={handleReset}>다시 시도하기</Button>
      </div>
    </div>
  );
};

export default Error;
