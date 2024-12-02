'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import HeadingText from '@/components/common/HeadingText';
import StoreCard from '@/components/store/StoreCard';
import { queries } from '@/queries';

const TopicGrid = () => {
  const {
    data: { presentations },
  } = useSuspenseQuery({
    ...queries.presentation.slides,
  });

  return (
    <main className="container flex flex-col items-center py-8">
      <HeadingText subtext="주제를 선택해 주세요">주제 목록</HeadingText>
      <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {presentations.map(({ id, topic, createdAt }) => (
          <StoreCard key={id} id={id} topic={topic} createdAt={createdAt} />
        ))}
      </div>
    </main>
  );
};

export default TopicGrid;
