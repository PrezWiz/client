import { PPTEditor } from '@/components/PPTEditor';
import { useCreationSlideQueries } from '@/hooks/useCreationSlideQueries';

type SlideEditorProps = {
  onPrev?: () => void;
};

const SlideEditor = ({ onPrev }: SlideEditorProps) => {
  const { id, slides = [] } = useCreationSlideQueries();

  if (!slides.length || !id) return null;

  return (
    <>
      <PPTEditor slides={slides} id={id} onPrev={onPrev} />
    </>
  );
};

export default SlideEditor;
