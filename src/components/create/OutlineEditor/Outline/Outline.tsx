import { useState } from 'react';
import OutlineCard from './OutlineCard';
import OutlineEditForm from './OutlineEditForm';

type OutlineProps = {
  outlineNumber: number;
  title?: string;
  description?: string;
  onDelete: () => void;
  onEdit: (title: string, description: string) => void;
  isEditing?: boolean;
};

const Outline = ({
  outlineNumber,
  title = '',
  description = '',
  onDelete,
  onEdit,
  isEditing = false,
}: OutlineProps) => {
  const [isEditingState, setIsEditing] = useState<boolean>(isEditing);

  const handleSave = (title: string, description: string) => {
    onEdit(title, description);
    setIsEditing(false);
  };

  return (
    <div className="flex items-start justify-between rounded-md border p-4">
      {isEditingState ? (
        <OutlineEditForm title={title} description={description} onSave={handleSave} />
      ) : (
        <OutlineCard
          outlineNumber={outlineNumber}
          title={title}
          description={description}
          onEdit={() => setIsEditing(true)}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default Outline;
