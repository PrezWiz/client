import Loading from '@/components/common/Loading';

const SlideCreationLoading = () => {
  return (
    <div className="flex items-center justify-center">
      <Loading />
      <h1>서비스 환경에 따라 몇분정도 소요될수 있습니다..</h1>
    </div>
  );
};

export default SlideCreationLoading;
