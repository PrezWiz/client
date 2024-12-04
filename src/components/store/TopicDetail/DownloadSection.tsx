import { Download } from 'lucide-react';
import { LoadingButton } from '@/components/common/LoadingButton';
import { Button } from '@/components/ui/button';

type DownloadSectionProps = {
  isScriptLoading: boolean;
  onDownloadPPT: () => void;
  onDownloadScript: () => Promise<void>;
};

const DownloadSection = ({ isScriptLoading, onDownloadPPT, onDownloadScript }: DownloadSectionProps) => {
  return (
    <div className="mt-8 flex justify-center gap-4">
      <Button className="gap-2 px-6 py-3" onClick={onDownloadPPT}>
        <Download className="h-5 w-5" />
        <span>PPT 다운로드</span>
      </Button>
      <LoadingButton
        variant="outline"
        isLoading={isScriptLoading}
        loadingText="스크립트 생성중..."
        icon={<Download className="h-5 w-5" />}
        onClick={onDownloadScript}
      >
        <span>스크립트 다운로드</span>
      </LoadingButton>
    </div>
  );
};

export default DownloadSection;
