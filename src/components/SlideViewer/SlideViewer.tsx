import { SlideType } from '@/types/presentation';
import Components from './Components';
import type { Swiper as SwiperType } from 'swiper/types';

export type SlideViewerProps = {
  slides: SlideType[];
  onSlideChange?: (swiper: SwiperType) => void;
  onTransitionEnd?: (swiper: SwiperType) => void;
  onTitleChange?: (index: number, value: string) => void;
  onContentChange?: (index: number, value: string) => void;
  readOnly?: boolean;
  swiper: SwiperType | null;
  setSwiper: (swiper: SwiperType) => void;
};

const SlideViewer = ({ swiper, ...props }: SlideViewerProps) => {
  return (
    <Components.Root>
      <Components.Button swiper={swiper} />
      <Components.Content {...props} />
    </Components.Root>
  );
};

export default SlideViewer;
