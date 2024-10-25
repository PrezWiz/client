'use client';

import HeadingText from '@/components/common/HeadingText';
import CreateForm from '@/components/create/CreateForm';

const Create = () => {
  return (
    <main className="container flex flex-col py-8">
      <HeadingText subtext="새로운 발표자료를 생성합니다.">Create</HeadingText>
      <CreateForm />
    </main>
  );
};

export default Create;
