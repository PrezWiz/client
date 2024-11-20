import LoadingComponent from '@/components/common/LoadingComponent';
import Slide from '@/components/create/Slide/Slide';
import SlideCreationLoading from '@/components/create/SlideCreationLoading';
import SubmitButton from '@/components/create/SubmitButton';
import useSlideOutline from '@/hooks/useSlideOutline';
import AddSlideButton from './AddSlideButton';
import SlideContainer from './SlideContainer';

interface Outline {
  title: string;
  description: string;
  slide_number: number;
}

type TopicListProps = {
  initialOutlines: Outline[];
  id: number;
  onNext: () => void;
};

const TopicList = ({ initialOutlines, id, onNext }: TopicListProps) => {
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
  } = useSlideOutline(initialOutlines, id);

  const handleNext = () => {
    handleSubmit();
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
