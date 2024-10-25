import { useState } from 'react';

interface TopicFormProps {
  onSubmit: (topic: string) => void; // 주제를 제출할 때 호출할 함수
}

const TopicForm = ({ onSubmit }: TopicFormProps) => {
  const [topicInput, setTopicInput] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(topicInput); // 부모 컴포넌트로 주제 전달
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
        Submit
      </button>
    </form>
  );
};

export default TopicForm;
