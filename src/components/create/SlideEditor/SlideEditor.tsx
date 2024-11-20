import { PPTEditor } from '@/components/PPTEditor';
import { useCreationSlideQueries } from '@/hooks/useCreationSlideQueries';

type SlideEditorProps = {
  onPrev?: () => void;
  onNext?: () => void;
};

const SlideEditor = ({ onPrev, onNext }: SlideEditorProps) => {
  const { presentationId, slides = [] } = useCreationSlideQueries();

  if (!slides.length) return null;

  return (
    <>
      <PPTEditor slides={slides} onPrev={onPrev} />
    </>
  );
};

export default SlideEditor;
