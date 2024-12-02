import { PPTEditor } from '@/components/PPTEditor';
import { useCreationSlideQueries } from '@/hooks/useCreationSlideQueries';

type SlideEditorProps = {
  onPrev?: () => void;
  onNext?: () => void;
};

const SlideEditor = ({ onPrev, onNext }: SlideEditorProps) => {
  const { id, slides = [] } = useCreationSlideQueries();

  if (!slides.length) return null;

  return (
    <>
      <PPTEditor slides={slides} id={id} onPrev={onPrev} />
    </>
  );
};

export default SlideEditor;
