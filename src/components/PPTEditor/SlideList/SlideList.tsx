'use client';

import { Slide } from '@/types/presentation';
import Components from './Components';

type SlideListProps = {
  slides: Slide[];
  activeSlide: number;
  deleteSlide: (id: number) => void;
  setActiveSlide: (slide: number) => void;
};

const SlideList = ({ slides, activeSlide, deleteSlide, setActiveSlide }: SlideListProps) => {
  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mb-2 block w-full rounded border ${
            index === activeSlide ? 'border-blue-500 bg-blue-50 dark:bg-secondary' : 'border-gray-200'
          }`}
        >
          <div className="flex h-10 items-center justify-between pr-2">
            <Components.SlideButton title={slide.title} onClick={() => setActiveSlide(index)} />
            {index !== 0 && <Components.DeleteButton onDelete={() => deleteSlide(index)} />}
          </div>
        </div>
      ))}
    </>
  );
};

export default SlideList;
