'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { mutations } from '@/queries';

const ContactForm = () => {
  const [message, setMessage] = useState('');

  const { mutateAsync } = useMutation({
    ...mutations.contact.sendMessage,
    onSuccess: () => {
      toast.success('메세지를 전송했어요\n 등록된 이메일로 답변 드릴게요');
    },
    onError: () => {
      toast.error('메세지 전송에 실패했어요');
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await mutateAsync(message);
    setMessage('');
  };

  return (
    <form className="mb-8 space-y-4" onSubmit={handleSubmit}>
      <textarea
        required
        id="message"
        name="message"
        value={message}
        placeholder="메세지를 입력해주세요"
        className="text-md h-48 w-full resize-none rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ minHeight: '350px' }}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit" className="w-full rounded-md bg-blue-500 p-2 text-white">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
