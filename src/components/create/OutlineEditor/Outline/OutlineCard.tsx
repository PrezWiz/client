'use client';

import { Edit, Trash } from 'lucide-react';

type ViewModeProps = {
  outlineNumber: number;
  title: string;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
};

const OutlineCard = ({ outlineNumber, title, description, onEdit, onDelete }: ViewModeProps) => {
  return (
    <>
      <div className="flex-1">
        <p className="mt-2 text-sm text-gray-500">Slide {outlineNumber}</p>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      <div className="flex space-x-2">
        <button className="p-1 text-blue-500" onClick={onEdit}>
          <Edit className="h-4 w-4" />
        </button>
        <button className="p-1 text-red-500" onClick={onDelete}>
          <Trash className="h-4 w-4" />
        </button>
      </div>
    </>
  );
};

export default OutlineCard;
