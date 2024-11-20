'use client';

import { useState } from 'react';
import { Save } from 'lucide-react';

type EditModeProps = {
  title: string;
  description: string;
  onSave: (title: string, description: string) => void;
};

const SlideEditForm = ({ title, description, onSave }: EditModeProps) => {
  const [values, setValues] = useState<{ title: string; description: string }>({ title, description });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSave(values.title, values.description);
  };

  return (
    <form className="flex-1" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        value={values.title}
        className="mb-2 w-full rounded-md border p-2"
        placeholder="슬라이드 제목"
        onChange={e => setValues({ ...values, title: e.target.value })}
      />
      <textarea
        required
        value={values.description}
        className="w-full rounded-md border p-2"
        placeholder="슬라이드 설명"
        onChange={e => setValues({ ...values, description: e.target.value })}
      />
      <button type="submit" className="mt-2 flex items-center rounded-md bg-green-500 p-2 text-white">
        <Save className="mr-2 h-4 w-4" />
        저장
      </button>
    </form>
  );
};

export default SlideEditForm;
