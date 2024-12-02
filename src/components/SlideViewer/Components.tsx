'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper as SwiperType } from 'swiper/types';
import { StrictPropsWithChildren } from '@/types/common';
import { cn } from '@/utils/styles';
import BasicSlide from './slide/BasicSlide';
import CoverSlide from './slide/CoverSlide';
import { SlideViewerProps } from './SlideViewer';

const Root = ({ children, className }: StrictPropsWithChildren<{ className?: string }>) => (
  <div
    className={cn(
      'relative h-full w-full overflow-hidden rounded-lg bg-background p-4 shadow-lg dark:border dark:bg-secondary',
      className
    )}
  >
    {children}
  </div>
);

type SwiperButtonProps = {
  swiper: SwiperType | null;
};

const Button = ({ swiper }: SwiperButtonProps) => {
  return (
    <>
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
    </>
  );
};

type ContentProps = Omit<SlideViewerProps, 'swiper'>;

const Content = ({
  slides,
  onSlideChange,
  onTransitionEnd,
  onTitleChange,
  onContentChange,
  readOnly = false,
  setSwiper,
}: ContentProps) => {
  return (
    <Swiper
      spaceBetween={25}
      className="h-full w-full"
      onSlideChange={onSlideChange}
      onTransitionEnd={onTransitionEnd}
      onSwiper={setSwiper}
    >
      {slides.map((slide, index) => {
        const SlideComponent = index === 0 ? CoverSlide : BasicSlide;

        return (
          <SwiperSlide key={index}>
            <SlideComponent
              title={slide.title}
              description={slide.content}
              handleTitleChange={value => onTitleChange?.(index, value)}
              handleDescriptionChange={value => onContentChange?.(index, value)}
              readOnly={readOnly}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

Content.displayName = 'SlideViewerContent';

const Components = {
  Root,
  Button,
  Content,
};

export default Components;
