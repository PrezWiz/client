import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import EmptyState from '@/components/common/EmptyState';
import { Button } from '@/components/ui/button';

type NoTopicDetailStateProps = {
  title: string;
};

const NoTopicDetailState = ({ title }: NoTopicDetailStateProps) => {
  return (
    <EmptyState title={title}>
      <Button asChild variant="outline" className="!mt-6">
        <Link href="/store">
          목록으로 돌아가기
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </EmptyState>
  );
};

export default NoTopicDetailState;
