import { Slide } from '@/components/create/Slide';
import { Slide as SlideType } from '@/types/slide';

type SlideContainerProps = {
  outlines: SlideType[];
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
