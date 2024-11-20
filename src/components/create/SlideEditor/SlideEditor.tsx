import { useCreationSlideQueries } from '@/hooks/useCreationSlideQueries';

type SlideEditorProps = {
  onNext?: () => void;
};

const SlideEditor = ({ onNext }: SlideEditorProps) => {
  const { presentationId, slides } = useCreationSlideQueries();

  return <div>SlideEditor</div>;
};

export default SlideEditor;
