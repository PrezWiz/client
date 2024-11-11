import { Button } from '@/components/ui/button';

type Props = {
  error: Error;
  reset: VoidFunction;
};

const ApiErrorFallback = ({ error, reset }: Props) => {
  return (
    <div>
      <h1 style={{ marginBottom: 20 }}>{error.message}</h1>
      <Button onClick={reset}>다시 불러오기</Button>
    </div>
  );
};

export default ApiErrorFallback;
