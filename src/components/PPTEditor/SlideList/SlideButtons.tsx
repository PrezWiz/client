'use client';

import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

type SlideButtonsProps = {
  onSavePresentation: () => void;
};

const SlideButtons = ({ onSavePresentation }: SlideButtonsProps) => {
  return (
    <Button className="sticky bottom-0 z-[1] mt-4 flex w-full items-center gap-1" onClick={onSavePresentation}>
      <Save className="h-4 w-4" />
      <span>저장</span>
    </Button>
  );
};

export default SlideButtons;
