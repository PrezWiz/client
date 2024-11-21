'use client';

import { Trash2 } from 'lucide-react';
import { Slide } from '@/types/presentation';

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
        <button
          key={index}
          type="button"
          className={`mb-2 block w-full cursor-pointer rounded border p-2 text-left ${
            index === activeSlide ? 'border-blue-500 bg-blue-50 dark:bg-secondary' : 'border-gray-200'
          }`}
          onClick={() => setActiveSlide(index)}
        >
          <div className="flex items-center justify-between">
            <span className="w-3/4 overflow-hidden text-ellipsis whitespace-nowrap text-sm" title={slide.title}>
              {slide.title}
            </span>
            {index !== 0 && (
              <button
                className="rounded-full p-1 hover:bg-gray-200"
                onClick={e => {
                  e.stopPropagation();
                  deleteSlide(index);
                }}
              >
                <Trash2 className="h-4 w-4 text-gray-500" />
              </button>
            )}
          </div>
        </button>
      ))}
    </>
  );
};

export default SlideList;
