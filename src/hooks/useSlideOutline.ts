'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { mutations } from '@/queries';
import { Slide } from '@/types/slide';

const reorderSlides = (slides: Slide[]): Slide[] => {
  return slides.map((slide, index) => ({
    ...slide,
    slide_number: index + 1,
  }));
};

const useSlideOutline = (initialSlides: Slide[], id?: number) => {
  const [slides, setSlides] = useState<Slide[]>(initialSlides);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({ ...mutations.slide.create });

  const handleDeleteSlide = (slideNumber: number) => {
    const updatedSlides = slides.filter(slide => slide.slide_number !== slideNumber);

    setSlides(reorderSlides(updatedSlides));
  };

  const handleEditSlide = (slideNumber: number, title: string, description: string) => {
    const updatedSlides = slides.map(slide => {
      if (slide.slide_number === slideNumber) {
        return {
          ...slide,
          title,
          description,
        };
      }
      return slide;
    });
    setSlides(updatedSlides);
    setIsAdding(false);
  };

  const handleAddSlide = () => {
    setIsAdding(true);
  };

  const handleNewSlide = (title: string, description: string) => {
    const newSlide: Slide = {
      title,
      description,
      slide_number: slides.length + 1,
    };
    setSlides([...slides, newSlide]);
    setIsAdding(false);
  };

  const handleSubmit = async () => {
    if (!id) {
      toast.error('올바르지 않은 접근입니다.');
      router.refresh();
      return;
    }

    await mutateAsync({ id, slides });
    router.push(`/store/${id}`);
  };

  const handleCancelAdd = () => {
    setIsAdding(false);
  };

  return {
    slides,
    isAdding,
    isPending,
    handleDeleteSlide,
    handleEditSlide,
    handleAddSlide,
    handleNewSlide,
    handleSubmit,
    handleCancelAdd,
  };
};

export default useSlideOutline;
