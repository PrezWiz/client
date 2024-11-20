'use client';

import { useEffect, useState } from 'react';
import { generatePPT } from '@/libs/pptx';
import { Slide as SlideType } from '@/types/slide';
import EditorToolbar from './EditorToolbar';
import SlideList from './SlideList';
import SlideViewer from './SlideViewer';
import type { Swiper as SwiperType } from 'swiper/types';

type PPTEditorProps = {
  slides: SlideType[];
  onPrev?: () => void;
};

const PPTEditor = ({ slides: initialSlides, onPrev }: PPTEditorProps) => {
  const [slides, setSlides] = useState(initialSlides);
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const addSlide = () => {
    const newSlide = {
      id: slides.length + 1,
      title: `슬라이드 ${slides.length + 1}`,
      content: '새로운 내용',
    };
    setSlides([...slides, newSlide]);
    setActiveSlide(slides.length);
  };

  const deleteSlide = (targetIndex: number) => {
    setSlides(slides.filter((_, index) => index !== targetIndex));
  };

  const savePresentation = () => {
    generatePPT(slides);
  };

  const handleTitleChange = (targetIndex: number, value: string) => {
    setSlides(slides.map((slide, index) => (index === targetIndex ? { ...slide, title: value } : slide)));
  };

  const handleContentChange = (targetIndex: number, value: string) => {
    setSlides(slides.map((slide, index) => (index === targetIndex ? { ...slide, content: value } : slide)));
  };

  useEffect(() => {
    swiper?.slideTo(activeSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide]);

  return (
    <div className="fixed inset-0 z-10 h-screen bg-gray-100">
      <EditorToolbar onPrev={onPrev} />
      <div className="flex h-[calc(100%-3.5rem)] w-full gap-4 p-4">
        <SlideViewer
          slides={slides}
          setActiveSlide={setActiveSlide}
          swiper={swiper}
          setSwiper={setSwiper}
          handleTitleChange={handleTitleChange}
          handleContentChange={handleContentChange}
        />
        <SlideList
          slides={slides}
          activeSlide={activeSlide}
          addSlide={addSlide}
          deleteSlide={deleteSlide}
          savePresentation={savePresentation}
          setActiveSlide={setActiveSlide}
        />
      </div>
    </div>
  );
};

export default PPTEditor;
