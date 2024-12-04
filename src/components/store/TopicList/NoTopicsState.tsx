import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import EmptyState from '@/components/common/EmptyState';
import { Button } from '@/components/ui/button';

const NoTopicsState = () => {
  return (
    <EmptyState title="아직 생성된 주제가 없어요" description="새로운 주제를 생성해보세요">
      <Button asChild variant="outline" className="!mt-6">
        <Link href="/create">
          프레젠테이션 생성
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </EmptyState>
  );
};

export default NoTopicsState;
