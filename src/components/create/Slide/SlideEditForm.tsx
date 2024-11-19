'use client';

import { Save } from 'lucide-react';

type EditModeProps = {
  editTitle: string;
  editDescription: string;
  setEditTitle: (title: string) => void;
  setEditDescription: (description: string) => void;
  onSave: () => void;
};

const SlideEditForm = ({ editTitle, editDescription, setEditTitle, setEditDescription, onSave }: EditModeProps) => {
  return (
    <div className="flex-1">
      <input
        type="text"
        value={editTitle}
        className="mb-2 w-full rounded-md border p-2"
        placeholder="슬라이드 제목"
        onChange={e => setEditTitle(e.target.value)}
      />
      <textarea
        value={editDescription}
        className="w-full rounded-md border p-2"
        placeholder="슬라이드 설명"
        onChange={e => setEditDescription(e.target.value)}
      />
      <button className="mt-2 flex items-center rounded-md bg-green-500 p-2 text-white" onClick={onSave}>
        <Save className="mr-2 h-4 w-4" />
        저장
      </button>
    </div>
  );
};

export default SlideEditForm;
