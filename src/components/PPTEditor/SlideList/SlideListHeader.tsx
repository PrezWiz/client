'use client';

import { Plus } from 'lucide-react';

type SlideListHeaderProps = {
  addSlide: () => void;
};

const SlideListHeader = ({ addSlide }: SlideListHeaderProps) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-lg font-semibold">슬라이드</h2>
      <button className="rounded-full p-2 hover:bg-gray-100" onClick={addSlide}>
        <Plus className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SlideListHeader;
