'use client';

import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { mutations } from '@/queries';
import { Outline } from '@/types/presentation';

const reorderOutlines = (outlines: Outline[]): Outline[] => {
  return outlines.map((outline, index) => ({
    ...outline,
    slide_number: index + 1,
  }));
};

const useSlideOutline = (initialOutlines: Outline[], id: number) => {
  const queryClient = useQueryClient();
  const [outlines, setOutlines] = useState<Outline[]>(initialOutlines);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    ...mutations.presentation.create,
    onSuccess: async data => {
      await queryClient.setQueryData(mutations.presentation.create.mutationKey, data);
    },
  });

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
    const newOutline = {
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
