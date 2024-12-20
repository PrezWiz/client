import { Calendar, ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { parseDateISO } from '@/utils/time';

type TopicCardProps = {
  id: number;
  topic: string;
  createdAt: string;
};

const TopicCard = ({ id, topic, createdAt }: TopicCardProps) => {
  const formattedDate = parseDateISO(createdAt).formatted;

  return (
    <Link href={`/store/${id}`}>
      <Card className="group relative w-full overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:shadow-lg dark:hover:shadow-zinc-900">
        <CardHeader className="p-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 rounded-md bg-muted p-2">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardTitle className="line-clamp-1 flex-1 text-lg font-medium text-card-foreground">{topic}</CardTitle>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <CardDescription>{formattedDate}</CardDescription>
              </div>

              <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
                자세히 보기
                <ChevronRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default TopicCard;
