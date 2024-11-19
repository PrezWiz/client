'use client';

import { useMutation } from '@tanstack/react-query';
import Loading from '@/components/common/Loading';
import LoadingComponent from '@/components/common/LoadingComponent';
import useFunnel from '@/hooks/useFunnel';
import { mutations } from '@/queries';
import TopicForm from './TopicForm';
import TopicList from './TopicList';

const StepName = {
  WRITE_FORM: 'WRITE_FORM',
  EDIT_CONTENTS: 'EDIT_CONTENTS',
} as const;

const CreateForm = () => {
  const [Funnel, setStep] = useFunnel(Object.values(StepName));

  const {
    mutateAsync,
    data: { prototypesDto: { slides } = { slides: [] }, presentationId } = {},
    isPending,
  } = useMutation({
    ...mutations.slide.createOutlines,
    onSuccess: () => {
      setStep(StepName.EDIT_CONTENTS);
    },
  });

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
      <Funnel.Step name={StepName.EDIT_CONTENTS}>
        <TopicList initialSlides={slides} id={presentationId} />
      </Funnel.Step>
    </Funnel>
  );
};

export default CreateForm;
