'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Download } from 'lucide-react';
import { useParams } from 'next/navigation';
import HeadingText from '@/components/common/HeadingText';
import { SlideViewer } from '@/components/SlideViewer';
import { Button } from '@/components/ui/button';
import useSwiper from '@/hooks/useSwiper';
import { generatePPT } from '@/libs/pptx';
import { queries } from '@/queries';

const TopicDetail = () => {
  const { id } = useParams();
  const { activeIndex, handleSlideChange, swiper, setSwiper } = useSwiper();

  const {
    data: { slides },
  } = useSuspenseQuery({
    ...queries.presentation.slide,
    queryKey: queries.presentation.slide.queryKey(Number(id)),
    queryFn: () => queries.presentation.slide.queryFn(Number(id)),
  });

  const handleDownloadPPT = () => {
    generatePPT(slides);
  };

  return (
    <main className="container mx-auto max-w-6xl px-4 py-12">
      <HeadingText className="mb-8">{slides[0].title}</HeadingText>
      <div className="relative rounded-lg border bg-card shadow-sm">
        <SlideViewer
          readOnly
          slides={slides}
          swiper={swiper}
          setSwiper={setSwiper}
          className="aspect-video w-full"
          onSlideChange={handleSlideChange}
        />
        <div className="absolute bottom-8 right-8 z-[1] rounded-full bg-black/50 px-3 py-1 text-sm text-white">
          {activeIndex + 1} / {slides.length}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <Button className="gap-2 px-6 py-3" onClick={handleDownloadPPT}>
          <Download className="h-5 w-5" />
          <span>PPT 다운로드</span>
        </Button>
        <Button variant="outline" className="gap-2 px-6 py-3">
          <Download className="h-5 w-5" />
          <span>스크립트 다운로드</span>
        </Button>
      </div>
    </main>
  );
};

export default TopicDetail;
