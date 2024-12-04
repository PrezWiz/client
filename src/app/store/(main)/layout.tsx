import HeadingText from '@/components/common/HeadingText';
import { StrictPropsWithChildren } from '@/types/common';

const StoreLayout = ({ children }: StrictPropsWithChildren) => {
  return (
    <main className="container flex flex-col items-center py-8">
      <HeadingText subtext="주제를 선택해 주세요">주제 목록</HeadingText>
      {children}
    </main>
  );
};

export default StoreLayout;
