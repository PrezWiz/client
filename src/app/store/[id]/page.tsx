'use client';

import HeadingText from '@/components/common/HeadingText';
import Show from '@/components/common/Show';
import { DownloadSection, NoTopicDetailState, SlideViewerSection } from '@/components/store/TopicDetail';
import useTopicDetailActions from '@/hooks/useTopicDetailActions';

const TopicDetailPage = () => {
  const {
    slides,
    activeIndex,
    swiper,
    setSwiper,
    isScriptLoading,
    handleSlideChange,
    handleDownloadPPT,
    handleDownloadScript,
    isSlidesLoading,
    errorMessage,
  } = useTopicDetailActions();

  return (
    <Show loading={isSlidesLoading} when={slides.length > 0} fallback={<NoTopicDetailState title={errorMessage!} />}>
      <HeadingText className="mb-8">{slides[0]?.title}</HeadingText>
      <SlideViewerSection
        slides={slides}
        swiper={swiper}
        setSwiper={setSwiper}
        activeIndex={activeIndex}
        onSlideChange={handleSlideChange}
      />
      <DownloadSection
        isScriptLoading={isScriptLoading}
        onDownloadPPT={handleDownloadPPT}
        onDownloadScript={handleDownloadScript}
      />
    </Show>
  );
};

export default TopicDetailPage;
