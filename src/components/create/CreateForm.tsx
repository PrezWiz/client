'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import Loading from '@/components/common/Loading';
import LoadingComponent from '@/components/common/LoadingComponent';
import { mutations } from '@/queries';
import SlidesList from './SlidesList';
import TopicForm from './TopicForm';

const CreateForm = () => {
  const [topic, setTopic] = useState<string | null>(null);

  const {
    mutateAsync,
    data: { slides } = {},
    isPending,
  } = useMutation({
    ...mutations.slide.create,
  });

  const handleCreateContents = async (topic: string) => {
    setTopic(topic);

    await mutateAsync(topic);
  };

  return (
    <div className="flex flex-col space-y-8">
      {!slides ? (
        <LoadingComponent isLoading={isPending} fallback={<Loading />}>
          <TopicForm onSubmit={handleCreateContents} />
        </LoadingComponent>
      ) : (
        <SlidesList initialSlides={slides} topic={topic} />
      )}
    </div>
  );
};

export default CreateForm;
