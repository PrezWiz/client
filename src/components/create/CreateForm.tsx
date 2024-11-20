'use client';

import useFunnel from '@/hooks/useFunnel';
import { SlideEditor } from './SlideEditor';
import TopicForm from './TopicForm';
import { TopicList } from './TopicList';

const StepName = {
  WRITE_FORM: 'WRITE_FORM',
  EDIT_OUTLINE: 'EDIT_OUTLINE',
  EDIT_SLIDES: 'EDIT_SLIDES',
  COMPLETE: 'COMPLETE',
} as const;

const CreateForm = () => {
  const [Funnel, setStep] = useFunnel(Object.values(StepName));

  return (
    <Funnel>
      <Funnel.Step name={StepName.WRITE_FORM}>
        <TopicForm onNext={() => setStep(StepName.EDIT_OUTLINE)} />
      </Funnel.Step>
      <Funnel.Step name={StepName.EDIT_OUTLINE}>
        <TopicList onNext={() => setStep(StepName.EDIT_SLIDES)} />
      </Funnel.Step>
      <Funnel.Step name={StepName.EDIT_SLIDES}>
        <SlideEditor onNext={() => setStep(StepName.COMPLETE)} />
      </Funnel.Step>
    </Funnel>
  );
};

export default CreateForm;
