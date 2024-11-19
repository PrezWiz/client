import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { mutations } from '@/queries';
import AddSlideButton from './AddSlideButton';
import Slide from './Slide';
import SlideContainer from './SlideContainer';
import SubmitButton from './SubmitButton';

// 슬라이드 데이터 타입 정의
interface Slide {
  title: string;
  description: string;
  slide_number: number;
}

interface SlidesListProps {
  initialSlides: Slide[]; // 초기 슬라이드 데이터
  id?: number;
}

const SlidesList = ({ initialSlides, id }: SlidesListProps) => {
  const [slides, setSlides] = useState<Slide[]>(initialSlides); // 슬라이드 상태 관리
  const [isAdding, setIsAdding] = useState<boolean>(false); // 새로운 슬라이드 추가 여부
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({ ...mutations.slide.create });

  // 슬라이드를 오름차순으로 정렬하는 함수
  const reorderSlides = (slides: Slide[]): Slide[] => {
    return slides.map((slide, index) => ({
      ...slide,
      slide_number: index + 1, // 1부터 오름차순으로 번호 부여
    }));
  };

  const handleDeleteSlide = (slideNumber: number) => {
    const updatedSlides = slides.filter(slide => slide.slide_number !== slideNumber);
    setSlides(reorderSlides(updatedSlides)); // 삭제 후 슬라이드 번호 재정렬
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
    setSlides(reorderSlides(updatedSlides)); // 수정 후 슬라이드 번호 재정렬
    setIsAdding(false); // 새 슬라이드 추가 중지
  };

  const handleAddSlide = () => {
    setIsAdding(true); // 새로운 슬라이드 추가
  };

  // 슬라이드를 서버로 보내는 함수
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
    setSlides(reorderSlides([...slides, newSlide])); // 새로운 슬라이드 추가 후 정렬
    setIsAdding(false); // 추가 완료 후 추가 모드 종료
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
          slide_number={slides.length + 1}
          isEditing={true} // 수정 모드로 시작
          onDelete={() => setIsAdding(false)} // 취소하면 슬라이드 추가 중지
          onEdit={handleEdit}
        />
      )}
      <AddSlideButton onClick={handleAddSlide} />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};

export default SlidesList;
