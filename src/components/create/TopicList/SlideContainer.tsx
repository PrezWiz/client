import { Outline } from '@/types/slide';
import { Slide } from './Slide';

type SlideContainerProps = {
  outlines: Outline[];
  onDelete: (slideNumber: number) => void;
  onEdit: (slideNumber: number, title: string, description: string) => void;
};

const SlideContainer = ({ outlines, onDelete, onEdit }: SlideContainerProps) => (
  <>
    {outlines.map((outline, index) => (
      <div key={index} className="mb-4">
        <Slide
          slideNumber={outline.slide_number}
          title={outline.title}
          description={outline.description}
          onDelete={() => onDelete(outline.slide_number)}
          onEdit={(updatedTitle, updatedDescription) => onEdit(outline.slide_number, updatedTitle, updatedDescription)}
        />
      </div>
    ))}
  </>
);

export default SlideContainer;
