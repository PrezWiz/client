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
  className?: string;
};

const SlideViewer = ({ swiper, className, ...props }: SlideViewerProps) => {
  return (
    <Components.Root className={className}>
      <Components.Button swiper={swiper} />
      <Components.Content {...props} />
    </Components.Root>
  );
};

export default SlideViewer;
