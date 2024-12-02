'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { generatePPT } from '@/libs/pptx';
import { mutations } from '@/queries';
import { SlideType } from '@/types/presentation';

type UsePPTEditorActionsProps = {
  initialSlides: SlideType[];
  id: number;
  setActiveIndex: (index: number) => void;
};

const usePPTEditorActions = ({ initialSlides, id, setActiveIndex }: UsePPTEditorActionsProps) => {
  const [slides, setSlides] = useState(initialSlides);
  const router = useRouter();

  const { mutateAsync } = useMutation({
    ...mutations.presentation.update,
  });

  const addSlide = () => {
    const newSlide = {
      id: slides.length + 1,
      title: `슬라이드 ${slides.length + 1}`,
      content: '새로운 내용',
    };
    setSlides(prev => {
      const updatedSlides = [...prev, newSlide];
      setActiveIndex(updatedSlides.length - 1);

      return updatedSlides;
    });
  };

  const deleteSlide = (targetIndex: number) => {
    setSlides(prev => prev.filter((_, index) => index !== targetIndex));
  };

  const handleTitleChange = (targetIndex: number, value: string) => {
    setSlides(prev => prev.map((slide, index) => (index === targetIndex ? { ...slide, title: value } : slide)));
  };

  const handleContentChange = (targetIndex: number, value: string) => {
    setSlides(prev => prev.map((slide, index) => (index === targetIndex ? { ...slide, content: value } : slide)));
  };

  const savePresentation = async () => {
    await mutateAsync({ id, slides });
    generatePPT(slides);
    router.push(`/store/${id}`);
  };

  return {
    slides,
    addSlide,
    deleteSlide,
    handleTitleChange,
    handleContentChange,
    savePresentation,
  };
};

export default usePPTEditorActions;
