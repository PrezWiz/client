import LoadingComponent from '@/components/common/LoadingComponent';
import { useCreationSlideQueries } from '@/hooks/useCreationSlideQueries';
import useSlideOutline from '@/hooks/useSlideOutline';
import Components from './Components';
import { Outline } from './Outline';
import OutlineList from './OutlineList';

type OutlineEditorProps = {
  onNext: () => void;
};

const OutlineEditor = ({ onNext }: OutlineEditorProps) => {
  const { presentationId, outlines: initialOutlines } = useCreationSlideQueries();

  const {
    outlines,
    isAdding,
    isPending,
    handleDeleteOutline,
    handleEditOutline,
    handleAddOutline,
    handleNewOutline,
    handleSubmit,
    handleCancelAdd,
  } = useSlideOutline(initialOutlines, presentationId!);

  const handleNext = async () => {
    await handleSubmit();
    onNext();
  };

  return (
    <LoadingComponent isLoading={isPending} fallback={<Components.CreationLoading />}>
      <div className="space-y-8">
        <OutlineList outlines={outlines} onDelete={handleDeleteOutline} onEdit={handleEditOutline} />
        {isAdding && (
          <Outline isEditing slideNumber={outlines.length + 1} onDelete={handleCancelAdd} onEdit={handleNewOutline} />
        )}
        <Components.AddButton onClick={handleAddOutline} />
        <Components.SubmitButton onClick={handleNext} />
      </div>
    </LoadingComponent>
  );
};

export default OutlineEditor;
