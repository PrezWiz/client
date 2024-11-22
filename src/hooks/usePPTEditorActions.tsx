'use client';

import { useState } from 'react';
import { generatePPT } from '@/libs/pptx';
import { Slide as SlideType } from '@/types/presentation';

const usePPTEditorActions = (initialSlides: SlideType[]) => {
  const [slides, setSlides] = useState(initialSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const addSlide = () => {
    const newSlide = {
      id: slides.length + 1,
      title: `슬라이드 ${slides.length + 1}`,
      content: '새로운 내용',
    };
    setSlides(prev => {
      const updatedSlides = [...prev, newSlide];
      setActiveSlide(updatedSlides.length - 1);

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

  const savePresentation = () => {
    generatePPT(slides);
  };

  return {
    slides,
    activeSlide,
    setActiveSlide,
    addSlide,
    deleteSlide,
    handleTitleChange,
    handleContentChange,
    savePresentation,
  };
};

export default usePPTEditorActions;
