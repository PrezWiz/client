'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loading from '@/components/common/Loading';
import LoadingComponent from '@/components/common/LoadingComponent';
import { mutations } from '@/queries';

type TopicFormProps = {
  onNext: () => void;
};

const TopicForm = ({ onNext }: TopicFormProps) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    ...mutations.presentation.createOutlines,
    onSuccess: async data => {
      await queryClient.setQueryData(mutations.presentation.createOutlines.mutationKey, data);
      onNext();
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const topic = formData.get('topicInput') as string;

    await mutateAsync(topic);
  };

  return (
    <LoadingComponent isLoading={isPending} fallback={<Loading />}>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="topicInput" className="text-lg font-medium">
          주제를 입력해주세요:
        </label>
        <input
          required
          type="text"
          id="topicInput"
          name="topicInput"
          className="rounded-md border border-gray-300 p-2"
          placeholder="예시: 수요와 공급"
        />
        <button type="submit" className="rounded-md bg-blue-500 p-2 text-white">
          생성
        </button>
      </form>
    </LoadingComponent>
  );
};

export default TopicForm;
