import { useState } from 'react';
import SlideCard from './SlideCard';
import SlideEditForm from './SlideEditForm';

interface SlideProps {
  slideNumber: number;
  title?: string;
  description?: string;
  onDelete: () => void;
  onEdit: (updatedTitle: string, updatedDescription: string) => void;
  isEditing?: boolean;
}

const Slide = ({ slideNumber, title = '', description = '', onDelete, onEdit, isEditing = false }: SlideProps) => {
  const [isEditingState, setIsEditing] = useState<boolean>(isEditing);
  const [editTitle, setEditTitle] = useState<string>(title);
  const [editDescription, setEditDescription] = useState<string>(description);

  const handleSave = () => {
    onEdit(editTitle, editDescription);
    setIsEditing(false);
  };

  return (
    <div className="flex items-start justify-between rounded-md border p-4">
      {isEditingState ? (
        <SlideEditForm
          editTitle={editTitle}
          editDescription={editDescription}
          setEditTitle={setEditTitle}
          setEditDescription={setEditDescription}
          onSave={handleSave}
        />
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
