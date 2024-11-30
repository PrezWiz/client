import { OutlineType } from '@/types/presentation';
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
          outlineNumber={outline.outline_number}
          title={outline.title}
          description={outline.description}
          onDelete={() => onDelete(outline.outline_number)}
          onEdit={(updatedTitle, updatedDescription) =>
            onEdit(outline.outline_number, updatedTitle, updatedDescription)
          }
        />
      </div>
    ))}
  </>
);

export default OutlineList;
