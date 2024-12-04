'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import useSwiper from '@/hooks/useSwiper';
import { generatePPT } from '@/libs/pptx';
import { mutations, queries } from '@/queries';
import { ApiErrorResponse } from '@/types/apis';
import { SlideResponse } from '@/types/presentation';
import { getFetchErrorMessage } from '@/utils/\bapis';
import { downloadTextFile } from '@/utils/file';

const useTopicDetailActions = () => {
  const { id } = useParams();
  const { activeIndex, handleSlideChange, swiper, setSwiper } = useSwiper();

  const {
    data: { slides } = { slides: [] },
    isPending: isSlidesLoading,
    error,
  } = useQuery<SlideResponse, ApiErrorResponse>({
    ...queries.presentation.slide,
    queryKey: queries.presentation.slide.queryKey(Number(id)),
    queryFn: () => queries.presentation.slide.queryFn(Number(id)),
  });

  const { mutateAsync: getScript, isPending: isScriptLoading } = useMutation({
    ...mutations.presentation.script,
    mutationKey: mutations.presentation.script.mutationKey(Number(id)),
  });

  const handleDownloadPPT = () => {
    generatePPT(slides);
  };

  const handleDownloadScript = async () => {
    const script = await getScript({ id: Number(id), slides });
    downloadTextFile(script.content, slides[0].title);
  };

  return {
    slides,
    activeIndex,
    swiper,
    setSwiper,
    isScriptLoading,
    handleSlideChange,
    handleDownloadPPT,
    handleDownloadScript,
    isSlidesLoading,
    errorMessage: getFetchErrorMessage(error),
  };
};

export default useTopicDetailActions;
