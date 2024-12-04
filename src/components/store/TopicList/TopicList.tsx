import TopicCard from '@/components/store/TopicList/TopicCard';
import { PresentationType } from '@/types/presentation';

type TopicListProps = {
  presentations: PresentationType[];
};

const TopicList = ({ presentations }: TopicListProps) => {
  return (
    <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {presentations.map(({ id, topic, createdAt }) => (
        <TopicCard key={id} id={id} topic={topic} createdAt={createdAt} />
      ))}
    </div>
  );
};

export default TopicList;
