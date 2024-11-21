'use client';

import { type Dispatch, type SetStateAction, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper as SwiperType } from 'swiper/types';
import { Slide } from '@/types/presentation';
import BasicSlide from './Slide/BasicSlide';
import CoverSlide from './Slide/CoverSlide';

type SlideViewerProps = {
  swiper: SwiperType | null;
  slides: Slide[];
  setActiveSlide: (slide: number) => void;
  setSwiper: Dispatch<SetStateAction<SwiperType | null>>;
  handleTitleChange: (index: number, value: string) => void;
  handleContentChange: (index: number, value: string) => void;
};

const SlideViewer = ({
  slides,
  setActiveSlide,
  swiper,
  setSwiper,
  handleTitleChange,
  handleContentChange,
}: SlideViewerProps) => {
  const sliderRef = useRef<SwiperRef>(null);

  const onSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex);
  };

  const onTransitionEnd = (swiper: SwiperType) => {
    sliderRef.current?.swiper.slides[swiper.activeIndex].querySelector('input')?.focus();
  };

  return (
    <div className="w-[calc(100%-19rem)] flex-1">
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-4 shadow-lg dark:border dark:bg-secondary">
        <button
          type="button"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-foreground bg-background p-2 shadow-lg"
          onClick={() => swiper?.slidePrev()}
        >
          <ChevronLeft className="h-6 w-6 stroke-foreground" />
        </button>
        <button
          type="button"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-foreground bg-background p-2 shadow-lg"
          onClick={() => swiper?.slideNext()}
        >
          <ChevronRight className="h-6 w-6 stroke-foreground" />
        </button>

        <Swiper
          spaceBetween={25}
          className="h-full w-full"
          ref={sliderRef}
          onSwiper={setSwiper}
          onSlideChange={onSlideChange}
          onTransitionEnd={onTransitionEnd}
        >
          {slides.map((slide, index) => {
            const SlideComponent = index === 0 ? CoverSlide : BasicSlide;

            return (
              <SwiperSlide key={index}>
                <SlideComponent
                  title={slide.title}
                  description={slide.content}
                  handleTitleChange={value => handleTitleChange(index, value)}
                  handleDescriptionChange={value => handleContentChange(index, value)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideViewer;
