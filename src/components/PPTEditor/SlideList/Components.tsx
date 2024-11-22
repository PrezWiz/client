'use client';

import { Plus, Save, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type HeaderProps = {
  addSlide: () => void;
};

const Header = ({ addSlide }: HeaderProps) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-lg font-semibold">슬라이드</h2>
      <button className="rounded-full p-2 hover:bg-gray-100" onClick={addSlide}>
        <Plus className="h-5 w-5" />
      </button>
    </div>
  );
};

type UtilityButtonsProps = {
  onSavePresentation: () => void;
};

const UtilityButtons = ({ onSavePresentation }: UtilityButtonsProps) => {
  return (
    <Button className="sticky bottom-0 z-[1] mt-4 flex w-full items-center gap-1" onClick={onSavePresentation}>
      <Save className="h-4 w-4" />
      <span>저장</span>
    </Button>
  );
};

type DeleteButtonProps = {
  onDelete: () => void;
};

const DeleteButton = ({ onDelete }: DeleteButtonProps) => {
  return (
    <button type="button" className="rounded-full p-1 hover:bg-gray-200" onClick={onDelete}>
      <Trash2 className="h-4 w-4 text-gray-500" />
    </button>
  );
};

type SlideButtonProps = {
  title: string;
  onClick: () => void;
};

const SlideButton = ({ title, onClick }: SlideButtonProps) => {
  return (
    <button
      type="button"
      className="w-[calc(100%-24px)] overflow-hidden text-ellipsis whitespace-nowrap p-2.5 text-left text-sm"
      title={title}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const Components = {
  Header,
  UtilityButtons,
  DeleteButton,
  SlideButton,
};

export default Components;
