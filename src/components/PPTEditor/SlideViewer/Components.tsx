import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper as SwiperType } from 'swiper/types';

type SwiperButtonProps = {
  swiper: SwiperType | null;
};

const SwiperButton = ({ swiper }: SwiperButtonProps) => {
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

const Components = {
  SwiperButton,
};

export default Components;
