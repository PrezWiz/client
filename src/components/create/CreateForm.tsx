'use client';

import { useMutation } from '@tanstack/react-query';
import Loading from '@/components/common/Loading';
import LoadingComponent from '@/components/common/LoadingComponent';
import { mutations } from '@/queries';
import SlidesList from './SlidesList';
import TopicForm from './TopicForm';

const CreateForm = () => {
  const {
    mutateAsync,
    data: { prototypesDto: { slides } = { slides: [] }, presentationId } = {},
    isPending,
  } = useMutation({
    ...mutations.slide.createOutlines,
  });

  const handleCreateContents = async (topic: string) => {
    await mutateAsync(topic);
  };

  return (
    <div className="flex flex-col space-y-8">
      {!presentationId ? (
        <LoadingComponent isLoading={isPending} fallback={<Loading />}>
          <TopicForm onSubmit={handleCreateContents} />
        </LoadingComponent>
      ) : (
        <SlidesList initialSlides={slides} id={presentationId} />
      )}
    </div>
  );
};

export default CreateForm;
