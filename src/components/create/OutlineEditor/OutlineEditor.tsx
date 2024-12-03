import Show from '@/components/common/Show';
import { useCreationSlideQueries } from '@/hooks/useCreationSlideQueries';
import useSlideOutlineActions from '@/hooks/useSlideOutlineActions';
import Components from './Components';
import { Outline } from './Outline';
import OutlineList from './OutlineList';

type OutlineEditorProps = {
  onNext: () => void;
};

const OutlineEditor = ({ onNext }: OutlineEditorProps) => {
  const { id, outlines: initialOutlines } = useCreationSlideQueries();

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
  } = useSlideOutlineActions(initialOutlines, id!);

  const handleNext = async () => {
    await handleSubmit();
    onNext();
  };

  return (
    <Show loading={isPending} when={outlines.length > 0} loadingComponent={<Components.CreationLoading />}>
      <div className="space-y-8">
        <OutlineList outlines={outlines} onDelete={handleDeleteOutline} onEdit={handleEditOutline} />
        {isAdding && (
          <Outline isEditing outlineNumber={outlines.length + 1} onDelete={handleCancelAdd} onEdit={handleNewOutline} />
        )}
        <Components.AddButton onClick={handleAddOutline} />
        <Components.SubmitButton onClick={handleNext} />
      </div>
    </Show>
  );
};

export default OutlineEditor;
