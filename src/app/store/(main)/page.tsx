'use client';

import { useQuery } from '@tanstack/react-query';
import Show from '@/components/common/Show';
import { NoTopicsState, TopicList } from '@/components/store/TopicList';
import { queries } from '@/queries';
import { sortByDateDesc } from '@/utils/time';

const TopicPage = () => {
  const { data: { presentations } = { presentations: [] }, isPending } = useQuery({
    ...queries.presentation.slides,
    select: ({ presentations }) => ({ presentations: sortByDateDesc(presentations) }),
  });

  return (
    <Show loading={isPending} when={presentations.length > 0} fallback={<NoTopicsState />}>
      <TopicList presentations={presentations} />
    </Show>
  );
};

export default TopicPage;
