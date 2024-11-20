'use client';

import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EditorToolbar = () => {
  const goBack = () => {
    console.log('뒤로가기 버튼 클릭');
  };

  return (
    <div className="flex gap-2 px-4 pt-4">
      <Button variant="outline" className="flex items-center gap-1 p-2" onClick={goBack}>
        <ArrowLeft className="h-4 w-4" />
        <span>뒤로가기</span>
      </Button>
    </div>
  );
};

export default EditorToolbar;
