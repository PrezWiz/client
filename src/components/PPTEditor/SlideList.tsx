import { Plus, Save, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slide } from '@/types/presentation';

type SlideListProps = {
  slides: Slide[];
  activeSlide: number;
  addSlide: () => void;
  deleteSlide: (id: number) => void;
  savePresentation: () => void;
  setActiveSlide: (slide: number) => void;
};

const SlideList = ({
  slides,
  activeSlide,
  addSlide,
  deleteSlide,
  savePresentation,
  setActiveSlide,
}: SlideListProps) => {
  return (
    <div className="h-full w-[18rem] flex-shrink-0 overflow-y-auto rounded-lg bg-white p-4 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">슬라이드</h2>
        <button className="rounded-full p-2 hover:bg-gray-100" onClick={addSlide}>
          <Plus className="h-5 w-5" />
        </button>
      </div>

      {slides.map((slide, index) => (
        <button
          key={index}
          type="button"
          className={`mb-2 block w-full cursor-pointer rounded border p-2 text-left ${index === activeSlide ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
          onClick={() => setActiveSlide(index)}
        >
          <div className="flex items-center justify-between">
            <span className="w-3/4 overflow-hidden text-ellipsis whitespace-nowrap text-sm" title={slide.title}>
              {slide.title}
            </span>
            <button
              className="rounded-full p-1 hover:bg-gray-200"
              onClick={e => {
                e.stopPropagation();
                deleteSlide(index);
              }}
            >
              <Trash2 className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </button>
      ))}
      <Button className="sticky bottom-0 z-[1] mt-4 flex w-full items-center gap-1" onClick={savePresentation}>
        <Save className="h-4 w-4" />
        <span>저장</span>
      </Button>
    </div>
  );
};

export default SlideList;
