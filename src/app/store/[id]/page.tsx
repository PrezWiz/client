'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import HeadingText from '@/components/common/HeadingText';
import { SlideViewer } from '@/components/SlideViewer';
import useSwiper from '@/hooks/useSwiper';
import { generatePPT } from '@/libs/pptx';
import { queries } from '@/queries';

// TODO: suspense 처리
const TopicDetail = () => {
  const { id } = useParams();
  const { activeIndex, handleSlideChange, swiper, setSwiper } = useSwiper();

  const {
    data: { slides },
  } = useSuspenseQuery({
    ...queries.presentation.slide,
    queryFn: () => queries.presentation.slide.queryFn(Number(id)),
  });

  const handleDownloadPPT = () => {
    generatePPT(slides);
  };

  // TODO: SlideViewer 완성형 컴포넌트로 변경

  return (
    <main className="container flex flex-col items-center py-8">
      <HeadingText>{slides[0].title}</HeadingText>
      <SlideViewer readOnly slides={slides} swiper={swiper} setSwiper={setSwiper} onSlideChange={handleSlideChange} />
      <div className="mt-4 text-sm text-muted-foreground">
        {activeIndex + 1} / {slides.length}
      </div>
      <div className="mt-8 flex gap-4">
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
          onClick={handleDownloadPPT}
        >
          Download PPT
        </button>
        <button className="rounded bg-green-500 px-4 py-2 text-white transition hover:bg-green-600">
          Download Script
        </button>
      </div>
    </main>
  );
};

export default TopicDetail;
