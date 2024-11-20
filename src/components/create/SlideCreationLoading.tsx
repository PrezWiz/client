import Loading from '@/components/common/Loading';

const SlideCreationLoading = () => {
  return (
    <div className="mt-8 space-y-8">
      <Loading />
      <p className="text-center text-gray-500">서비스 환경에 따라 몇 분 정도 소요 될 수 있어요</p>
    </div>
  );
};

export default SlideCreationLoading;
