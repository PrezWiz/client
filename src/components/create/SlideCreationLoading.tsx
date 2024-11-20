import Loading from '@/components/common/Loading';

const SlideCreationLoading = () => {
  return (
    <div className="mt-4 space-y-4">
      <Loading />
      <p className="text-center text-gray-500">서비스 환경에 따라 몇분정도 소요될수 있습니다.</p>
    </div>
  );
};

export default SlideCreationLoading;
