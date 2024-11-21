import LoadingComponent from '@/components/common/LoadingComponent';
import SubmitButton from '@/components/create/SubmitButton';
import { useCreationSlideQueries } from '@/hooks/useCreationSlideQueries';
import useSlideOutline from '@/hooks/useSlideOutline';
import AddSlideButton from './AddSlideButton';
import { Slide } from './Slide';
import SlideContainer from './SlideContainer';
import SlideCreationLoading from './SlideCreationLoading';

type TopicListProps = {
  onNext: () => void;
};

const TopicList = ({ onNext }: TopicListProps) => {
  const { presentationId, outlines: initialOutlines } = useCreationSlideQueries();

  const {
    outlines,
    isAdding,
    isPending,
    handleDeleteOutline,
    handleEditOutline,
    handleAddOutline,
    handleNewOutline,
    handleSubmit,
    handleCancelAdd,
  } = useSlideOutline(initialOutlines, presentationId!);

  const handleNext = async () => {
    await handleSubmit();
    onNext();
  };

  return (
    <LoadingComponent isLoading={isPending} fallback={<SlideCreationLoading />}>
      <div className="space-y-8">
        <SlideContainer outlines={outlines} onDelete={handleDeleteOutline} onEdit={handleEditOutline} />
        {isAdding && (
          <Slide isEditing slideNumber={outlines.length + 1} onDelete={handleCancelAdd} onEdit={handleNewOutline} />
        )}
        <AddSlideButton onClick={handleAddOutline} />
        <SubmitButton onClick={handleNext} />
      </div>
    </LoadingComponent>
  );
};

export default TopicList;
