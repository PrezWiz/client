import { Slide as SlideType } from '@/types/slide';
import Slide from './Slide/Slide';

type SlideContainerProps = {
  slides: SlideType[];
  onDelete: (slideNumber: number) => void;
  onEdit: (slideNumber: number, title: string, description: string) => void;
};

const SlideContainer = ({ slides, onDelete, onEdit }: SlideContainerProps) => (
  <>
    {slides.map((slide, index) => (
      <div key={index} className="mb-4">
        <Slide
          slideNumber={slide.slide_number}
          title={slide.title}
          description={slide.description}
          onDelete={() => onDelete(slide.slide_number)}
          onEdit={(updatedTitle, updatedDescription) => onEdit(slide.slide_number, updatedTitle, updatedDescription)}
        />
      </div>
    ))}
  </>
);

export default SlideContainer;
