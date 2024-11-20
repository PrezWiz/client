import { PPTEditor } from '@/components/PPTEditor';
import { useCreationSlideQueries } from '@/hooks/useCreationSlideQueries';

type SlideEditorProps = {
  onNext?: () => void;
};

const SlideEditor = ({ onNext }: SlideEditorProps) => {
  const { presentationId, slides = [] } = useCreationSlideQueries();

  if (!slides.length) return null;

  return (
    <>
      <PPTEditor slides={slides} />
    </>
  );
};

export default SlideEditor;
