import LoadingComponent from '@/components/common/LoadingComponent';
import useSlideOutline from '@/hooks/useSlideOutline';
import AddSlideButton from './AddSlideButton';
import Slide from './Slide/Slide';
import SlideContainer from './SlideContainer';
import SlideCreationLoading from './SlideCreationLoading';
import SubmitButton from './SubmitButton';

interface Slide {
  title: string;
  description: string;
  slide_number: number;
}

type TopicListProps = {
  initialSlides: Slide[];
  id?: number;
};

const TopicList = ({ initialSlides, id }: TopicListProps) => {
  const {
    slides,
    isAdding,
    isPending,
    handleDeleteSlide,
    handleEditSlide,
    handleAddSlide,
    handleNewSlide,
    handleSubmit,
    handleCancelAdd,
  } = useSlideOutline(initialSlides, id);

  return (
    <LoadingComponent isLoading={isPending} fallback={<SlideCreationLoading />}>
      <div className="space-y-8">
        <SlideContainer slides={slides} onDelete={handleDeleteSlide} onEdit={handleEditSlide} />
        {isAdding && (
          <Slide isEditing slideNumber={slides.length + 1} onDelete={handleCancelAdd} onEdit={handleNewSlide} />
        )}
        <AddSlideButton onClick={handleAddSlide} />
        <SubmitButton onClick={handleSubmit} />
      </div>
    </LoadingComponent>
  );
};

export default TopicList;
