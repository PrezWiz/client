import { useState } from 'react';
import SlideCard from './SlideCard';
import SlideEditForm from './SlideEditForm';

type SlideProps = {
  slideNumber: number;
  title?: string;
  description?: string;
  onDelete: () => void;
  onEdit: (title: string, description: string) => void;
  isEditing?: boolean;
};

const Slide = ({ slideNumber, title = '', description = '', onDelete, onEdit, isEditing = false }: SlideProps) => {
  const [isEditingState, setIsEditing] = useState<boolean>(isEditing);

  const handleSave = (title: string, description: string) => {
    onEdit(title, description);
    setIsEditing(false);
  };

  return (
    <div className="flex items-start justify-between rounded-md border p-4">
      {isEditingState ? (
        <SlideEditForm title={title} description={description} onSave={handleSave} />
      ) : (
        <SlideCard
          slideNumber={slideNumber}
          title={title}
          description={description}
          onEdit={() => setIsEditing(true)}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default Slide;
