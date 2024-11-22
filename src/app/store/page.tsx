'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import Link from 'next/link';
import HeadingText from '@/components/common/HeadingText';
import { queries } from '@/queries';

//TODO JSON 데이터 타입 정의

// 날짜 형식 변환 함수 (YYYY-MM-DD)
const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const TopicGrid = () => {
  //TODO : api type
  const { data: topicList = [], isError } = useSuspenseQuery({
    ...queries.presentation.slides,
  });

  return (
    <main className="container flex flex-col items-center py-8">
      <HeadingText subtext="주제를 선택해 주세요">주제 목록</HeadingText>
      <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {!isError &&
          topicList.map(topic => (
            <Link
              key={topic.id}
              href={`/store/${topic.id}`}
              className="cursor-pointer rounded border p-4 shadow transition hover:shadow-lg"
            >
              <h2 className="text-xl font-bold">{topic.topic}</h2>
              <p className="text-gray-500">작성일: {formatDate(topic.createdAt)}</p>
            </Link>
          ))}
      </div>
    </main>
  );
};

export default TopicGrid;
