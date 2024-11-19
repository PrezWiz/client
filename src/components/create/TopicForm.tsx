'use client';

import { useState } from 'react';

type TopicFormProps = {
  onNext: (topic: string) => void;
};

const TopicForm = ({ onNext }: TopicFormProps) => {
  const [topicInput, setTopicInput] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNext(topicInput);
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <label htmlFor="topicInput" className="text-lg font-medium">
        주제를 입력해주세요:
      </label>
      <input
        required
        type="text"
        id="topicInput"
        value={topicInput}
        className="rounded-md border border-gray-300 p-2"
        placeholder="예시: 수요와 공급"
        onChange={e => setTopicInput(e.target.value)}
      />
      <button type="submit" className="rounded-md bg-blue-500 p-2 text-white">
        생성
      </button>
    </form>
  );
};

export default TopicForm;
