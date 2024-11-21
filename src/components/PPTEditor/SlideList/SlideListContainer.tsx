import { Slide } from '@/types/presentation';
import SlideButtons from './SlideButtons';
import SlideList from './SlideList';
import SlideListHeader from './SlideListHeader';

type SlideListContainerProps = {
  slides: Slide[];
  activeSlide: number;
  addSlide: () => void;
  deleteSlide: (id: number) => void;
  setActiveSlide: (slide: number) => void;
  savePresentation: () => void;
};

const SlideListContainer = ({
  slides,
  activeSlide,
  addSlide,
  deleteSlide,
  setActiveSlide,
  savePresentation,
}: SlideListContainerProps) => {
  return (
    <div className="h-full w-[18rem] flex-shrink-0 overflow-y-auto rounded-lg bg-background p-4 shadow-lg dark:border dark:bg-secondary">
      <SlideListHeader addSlide={addSlide} />
      <SlideList slides={slides} activeSlide={activeSlide} deleteSlide={deleteSlide} setActiveSlide={setActiveSlide} />
      <SlideButtons onSavePresentation={savePresentation} />
    </div>
  );
};

export default SlideListContainer;
