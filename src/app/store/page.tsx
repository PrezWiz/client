'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import HeadingText from '@/components/common/HeadingText';
import Show from '@/components/common/Show';
import NoTopicsState from '@/components/store/NoTopicsState';
import TopicList from '@/components/store/TopicList';
import { queries } from '@/queries';
import { sortByDateDesc } from '@/utils/time';

const TopicGrid = () => {
  const {
    data: { presentations },
  } = useSuspenseQuery({
    ...queries.presentation.slides,
    select: ({ presentations }) => ({ presentations: sortByDateDesc(presentations) }),
  });

  //TODO: isPending 상태 추가
  return (
    <main className="container flex flex-col items-center py-8">
      <HeadingText subtext="주제를 선택해 주세요">주제 목록</HeadingText>
      <Show loading={false} when={presentations.length > 0} fallback={<NoTopicsState />}>
        <TopicList presentations={presentations} />
      </Show>
    </main>
  );
};

export default TopicGrid;
