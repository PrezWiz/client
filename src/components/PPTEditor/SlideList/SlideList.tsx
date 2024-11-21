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
        <div
          key={index}
          className={`mb-2 block w-full rounded border ${
            index === activeSlide ? 'border-blue-500 bg-blue-50 dark:bg-secondary' : 'border-gray-200'
          }`}
        >
          <div className="flex h-10 items-center justify-between pr-2">
            <button
              type="button"
              className="w-[calc(100%-24px)] overflow-hidden text-ellipsis whitespace-nowrap p-2.5 text-left text-sm"
              title={slide.title}
              onClick={() => setActiveSlide(index)}
            >
              {slide.title}
            </button>
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
        </div>
      ))}
    </>
  );
};

export default SlideList;
