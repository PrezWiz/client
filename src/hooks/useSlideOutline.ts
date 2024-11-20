'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { mutations } from '@/queries';
import { Slide } from '@/types/slide';

const reorderOutlines = (outlines: Slide[]): Slide[] => {
  return outlines.map((outline, index) => ({
    ...outline,
    slide_number: index + 1,
  }));
};

const useSlideOutline = (initialOutlines: Slide[], id: number) => {
  const [outlines, setOutlines] = useState<Slide[]>(initialOutlines);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({ ...mutations.slide.create });

  const handleDeleteOutline = (slideNumber: number) => {
    const updatedOutlines = outlines.filter(outline => outline.slide_number !== slideNumber);

    setOutlines(reorderOutlines(updatedOutlines));
  };

  const handleEditOutline = (slideNumber: number, title: string, description: string) => {
    const updatedOutlines = outlines.map(outline => {
      if (outline.slide_number === slideNumber) {
        return {
          ...outline,
          title,
          description,
        };
      }
      return outline;
    });
    setOutlines(updatedOutlines);
    setIsAdding(false);
  };

  const handleAddOutline = () => {
    setIsAdding(true);
  };

  const handleNewOutline = (title: string, description: string) => {
    const newOutline: Slide = {
      title,
      description,
      slide_number: outlines.length + 1,
    };
    setOutlines([...outlines, newOutline]);
    setIsAdding(false);
  };

  const handleSubmit = async () => {
    if (!id) {
      toast.error('올바르지 않은 접근입니다.');
      router.refresh();
      return;
    }

    await mutateAsync({ id, outlines });
  };

  const handleCancelAdd = () => {
    setIsAdding(false);
  };

  return {
    outlines,
    isAdding,
    isPending,
    handleDeleteOutline,
    handleEditOutline,
    handleAddOutline,
    handleNewOutline,
    handleSubmit,
    handleCancelAdd,
  };
};

export default useSlideOutline;
