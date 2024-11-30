'use client';

import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { mutations } from '@/queries';
import { OutlineType } from '@/types/presentation';

const reorderOutlines = (outlines: OutlineType[]): OutlineType[] => {
  return outlines.map((outline, index) => ({
    ...outline,
    slide_number: index + 1,
  }));
};

const useSlideOutlineActions = (initialOutlines: OutlineType[], id: number) => {
  const queryClient = useQueryClient();
  const [outlines, setOutlines] = useState<OutlineType[]>(initialOutlines);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    ...mutations.presentation.create,
    onSuccess: async data => {
      await queryClient.setQueryData(mutations.presentation.create.mutationKey, data);
    },
  });

  const handleDeleteOutline = (outlineNumber: number) => {
    const updatedOutlines = outlines.filter(outline => outline.outline_number !== outlineNumber);

    setOutlines(reorderOutlines(updatedOutlines));
  };

  const handleEditOutline = (outlineNumber: number, title: string, description: string) => {
    const updatedOutlines = outlines.map(outline => {
      if (outline.outline_number === outlineNumber) {
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
      outline_number: outlines.length + 1,
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

export default useSlideOutlineActions;
