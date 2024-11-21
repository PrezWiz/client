import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NotSupported = () => {
  return (
    <div className="fixed inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-8 bg-muted lg:hidden">
      <span className="text-center text-sm text-muted-foreground">모바일 환경에선 지원하지 않아요</span>
      <Button asChild type="button">
        <Link href="/">메인으로 가기</Link>
      </Button>
    </div>
  );
};

export default NotSupported;
