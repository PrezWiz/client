import { Slide } from '@/types/presentation';
import Components from './Components';
import SlideList from './SlideList';

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
      <Components.Header addSlide={addSlide} />
      <SlideList slides={slides} activeSlide={activeSlide} deleteSlide={deleteSlide} setActiveSlide={setActiveSlide} />
      <Components.UtilityButtons onSavePresentation={savePresentation} />
    </div>
  );
};

export default SlideListContainer;
