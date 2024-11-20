'use client';

import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type EditorToolbarProps = {
  onPrev?: () => void;
};

const EditorToolbar = ({ onPrev }: EditorToolbarProps) => {
  return (
    <div className="flex gap-2 px-4 pt-4">
      <Button variant="outline" className="flex items-center gap-1 p-2" onClick={onPrev}>
        <ArrowLeft className="h-4 w-4" />
        <span>뒤로가기</span>
      </Button>
    </div>
  );
};

export default EditorToolbar;
