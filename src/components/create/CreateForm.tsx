'use client';

import { useMutation } from '@tanstack/react-query';
import Loading from '@/components/common/Loading';
import LoadingComponent from '@/components/common/LoadingComponent';
import useFunnel from '@/hooks/useFunnel';
import { mutations } from '@/queries';
import TopicForm from './TopicForm';
import { TopicList } from './TopicList';

const StepName = {
  WRITE_FORM: 'WRITE_FORM',
  EDIT_OUTLINE: 'EDIT_OUTLINE',
  EDIT_SLIDES: 'EDIT_SLIDES',
} as const;

const CreateForm = () => {
  const [Funnel, setStep] = useFunnel(Object.values(StepName));

  const {
    mutateAsync,
    data: { prototypesDto: { slides: outlines } = { slides: [] }, presentationId: id } = {},
    isPending,
  } = useMutation({
    ...mutations.slide.createOutlines,
    onSuccess: () => {
      setStep(StepName.EDIT_OUTLINE);
    },
  });

  const presentationId = Number(id);

  const handleCreateOutline = async (topic: string) => {
    await mutateAsync(topic);
  };

  return (
    <Funnel>
      <Funnel.Step name={StepName.WRITE_FORM}>
        <LoadingComponent isLoading={isPending} fallback={<Loading />}>
          <TopicForm onNext={handleCreateOutline} />
        </LoadingComponent>
      </Funnel.Step>
      <Funnel.Step name={StepName.EDIT_OUTLINE}>
        <TopicList initialOutlines={outlines} id={presentationId} onNext={() => setStep(StepName.EDIT_SLIDES)} />
      </Funnel.Step>
    </Funnel>
  );
};

export default CreateForm;
