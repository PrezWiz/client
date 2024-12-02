'use client';

import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper/types';

type UseSwiperProps = {
  onTransitionEnd: (swiper: SwiperType) => void;
};

const useSwiper = (props?: UseSwiperProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleTransitionEnd = (swiper: SwiperType) => {
    props?.onTransitionEnd?.(swiper);
  };

  return { swiper, setSwiper, activeIndex, handleSlideChange, handleTransitionEnd, setActiveIndex };
};

export default useSwiper;
