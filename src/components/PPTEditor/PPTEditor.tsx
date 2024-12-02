'use client';

import { useEffect } from 'react';
import { SlideViewer } from '@/components/SlideViewer';
import usePPTEditorActions from '@/hooks/usePPTEditorActions';
import useSwiper from '@/hooks/useSwiper';
import { SlideType } from '@/types/presentation';
import EditorToolbar from './EditorToolbar';
import { SlideListContainer } from './SlideList';

type PPTEditorProps = {
  slides: SlideType[];
  id: number;
  onPrev?: () => void;
};

const PPTEditor = ({ slides: initialSlides, id, onPrev }: PPTEditorProps) => {
  const { swiper, setSwiper, handleSlideChange, activeIndex, setActiveIndex, handleTransitionEnd } = useSwiper({
    onTransitionEnd: swiper => {
      swiper.slides[swiper.activeIndex]?.querySelector('input')?.focus();
    },
  });

  const { slides, addSlide, deleteSlide, handleTitleChange, handleContentChange, savePresentation } =
    usePPTEditorActions({ initialSlides, id, setActiveIndex });

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(activeIndex);
    }
  }, [swiper, activeIndex]);

  return (
    <div className="fixed inset-0 z-10 h-screen bg-secondary dark:bg-background">
      <EditorToolbar onPrev={onPrev} />
      <div className="flex h-[calc(100%-3.5rem)] w-full gap-4 p-4">
        <SlideViewer
          swiper={swiper}
          setSwiper={setSwiper}
          slides={slides}
          onSlideChange={handleSlideChange}
          onTransitionEnd={handleTransitionEnd}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
        />
        <SlideListContainer
          slides={slides}
          activeSlide={activeIndex}
          addSlide={addSlide}
          deleteSlide={deleteSlide}
          savePresentation={savePresentation}
          setActiveSlide={setActiveIndex}
        />
      </div>
    </div>
  );
};

export default PPTEditor;
