'use client';

import { type Dispatch, type SetStateAction, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper as SwiperType } from 'swiper/types';
import { Slide } from '@/types/slide';

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
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-white p-4 shadow-lg">
        <button
          type="button"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
          onClick={() => swiper?.slidePrev()}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
          onClick={() => swiper?.slideNext()}
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <Swiper
          spaceBetween={25}
          className="h-full w-full"
          ref={sliderRef}
          onSwiper={setSwiper}
          onSlideChange={onSlideChange}
          onTransitionEnd={onTransitionEnd}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full rounded-lg border-2 border-dashed border-gray-300 p-6 px-12">
                <div className="h-[15%]">
                  <input
                    className="mb-2 h-full w-full border-b-2 border-gray-300 p-2 text-3xl font-semibold focus:outline-none"
                    value={slide.title}
                    maxLength={40}
                    onChange={e => handleTitleChange(index, e.target.value)}
                  />
                </div>
                <div className="h-[85%] pt-4">
                  <textarea
                    className="h-full w-full resize-none rounded border border-none p-2 text-2xl leading-[1.7] focus:outline-none"
                    value={slide.content}
                    onChange={e => handleContentChange(index, e.target.value)}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideViewer;
