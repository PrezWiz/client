import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { mutations } from '@/queries';
import AddSlideButton from './AddSlideButton';
import Slide from './Slide/Slide';
import SlideContainer from './SlideContainer';
import SubmitButton from './SubmitButton';

interface Slide {
  title: string;
  description: string;
  slide_number: number;
}

interface SlidesListProps {
  initialSlides: Slide[];
  id?: number;
}

const SlidesList = ({ initialSlides, id }: SlidesListProps) => {
  const [slides, setSlides] = useState<Slide[]>(initialSlides);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({ ...mutations.slide.create });

  const reorderSlides = (slides: Slide[]): Slide[] => {
    return slides.map((slide, index) => ({
      ...slide,
      slide_number: index + 1,
    }));
  };

  const handleDeleteSlide = (slideNumber: number) => {
    const updatedSlides = slides.filter(slide => slide.slide_number !== slideNumber);
    setSlides(reorderSlides(updatedSlides));
  };

  const handleEditSlide = (slideNumber: number, updatedTitle: string, updatedDescription: string) => {
    const updatedSlides = slides.map(slide => {
      if (slide.slide_number === slideNumber) {
        return {
          ...slide,
          title: updatedTitle,
          description: updatedDescription,
        };
      }
      return slide;
    });
    setSlides(reorderSlides(updatedSlides));
    setIsAdding(false);
  };

  const handleAddSlide = () => {
    setIsAdding(true);
  };

  const handleSubmit = async () => {
    if (!id) {
      console.error('Presentation ID is missing');
      return;
    }

    await mutateAsync({ id, slides });

    router.push(`/store/${id}`);
  };

  const handleEdit = (newTitle: string, newDescription: string) => {
    const newSlide: Slide = {
      title: newTitle,
      description: newDescription,
      slide_number: slides.length + 1,
    };
    setSlides(reorderSlides([...slides, newSlide]));
    setIsAdding(false);
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center">
        <h1>서비스 환경에 따라 몇분정도 소요될수 있습니다..</h1>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <SlideContainer slides={slides} onDelete={handleDeleteSlide} onEdit={handleEditSlide} />
      {isAdding && (
        <Slide
          slideNumber={slides.length + 1}
          isEditing={true}
          onDelete={() => setIsAdding(false)}
          onEdit={handleEdit}
        />
      )}
      <AddSlideButton onClick={handleAddSlide} />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};

export default SlidesList;
