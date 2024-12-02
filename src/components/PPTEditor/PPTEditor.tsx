'use client';

import { useEffect, useState } from 'react';
import usePPTEditorActions from '@/hooks/usePPTEditorActions';
import { SlideType } from '@/types/presentation';
import EditorToolbar from './EditorToolbar';
import { SlideListContainer } from './SlideList';
import SlideViewer from './SlideViewer/SlideViewer';
import type { Swiper as SwiperType } from 'swiper/types';

type PPTEditorProps = {
  slides: SlideType[];
  id: number;
  onPrev?: () => void;
};

const PPTEditor = ({ slides: initialSlides, id, onPrev }: PPTEditorProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const {
    slides,
    activeSlide,
    setActiveSlide,
    addSlide,
    deleteSlide,
    handleTitleChange,
    handleContentChange,
    savePresentation,
  } = usePPTEditorActions({ initialSlides, id });

  useEffect(() => {
    swiper?.slideTo(activeSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide]);

  return (
    <div className="fixed inset-0 z-10 h-screen bg-secondary dark:bg-background">
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
        <SlideListContainer
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
