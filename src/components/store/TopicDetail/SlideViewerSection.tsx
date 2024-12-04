import { Swiper } from 'swiper/types';
import { SlideViewer } from '@/components/SlideViewer';
import { SlideType } from '@/types/presentation';

type SlideViewerSectionProps = {
  slides: SlideType[];
  swiper: Swiper | null;
  setSwiper: (swiper: Swiper) => void;
  activeIndex: number;
  onSlideChange: (swiper: Swiper) => void;
};

const SlideViewerSection = ({ slides, swiper, setSwiper, activeIndex, onSlideChange }: SlideViewerSectionProps) => {
  return (
    <div className="relative rounded-lg border bg-card shadow-sm">
      <SlideViewer
        readOnly
        slides={slides}
        swiper={swiper}
        setSwiper={setSwiper}
        className="aspect-video w-full"
        onSlideChange={onSlideChange}
      />
      <div className="absolute bottom-8 right-8 z-[1] rounded-full bg-black/50 px-3 py-1 text-sm text-white">
        {activeIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default SlideViewerSection;
