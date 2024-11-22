import { Outline as OutlineType } from '@/types/presentation';
import { Outline } from './Outline';

type OutlineListProps = {
  outlines: OutlineType[];
  onDelete: (slideNumber: number) => void;
  onEdit: (slideNumber: number, title: string, description: string) => void;
};

const OutlineList = ({ outlines, onDelete, onEdit }: OutlineListProps) => (
  <>
    {outlines.map((outline, index) => (
      <div key={index} className="mb-4">
        <Outline
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

export default OutlineList;
