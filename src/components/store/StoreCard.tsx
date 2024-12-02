import Link from 'next/link';

// 날짜 형식 변환 함수 (YYYY-MM-DD)
const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

type StoreCardProps = {
  id: number;
  topic: string;
  createdAt: string;
};

const StoreCard = ({ id, topic, createdAt }: StoreCardProps) => {
  return (
    <Link href={`/store/${id}`} className="cursor-pointer rounded border p-4 shadow transition hover:shadow-lg">
      <strong className="text-xl font-bold">{topic}</strong>
      <p className="text-gray-500">작성일: {formatDate(createdAt)}</p>
    </Link>
  );
};

export default StoreCard;
