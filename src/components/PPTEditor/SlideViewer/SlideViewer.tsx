'use client';

import { type Dispatch, type SetStateAction, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Slide } from '@/types/presentation';
import Components from './Components';
import BasicSlide from './slide/BasicSlide';
import CoverSlide from './slide/CoverSlide';

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
    sliderRef.current?.swiper.slides[swiper.activeIndex]?.querySelector('input')?.focus();
  };

  return (
    <div className="w-[calc(100%-19rem)] flex-1">
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-4 shadow-lg dark:border dark:bg-secondary">
        <Components.SwiperButton swiper={swiper} />
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
