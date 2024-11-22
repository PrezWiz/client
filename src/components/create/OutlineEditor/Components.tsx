'use client';

import { FaPlus } from 'react-icons/fa';
import Loading from '@/components/common/Loading';

const CreationLoading = () => {
  return (
    <div className="mt-8 space-y-8">
      <Loading />
      <p className="text-md text-center text-muted-foreground">서비스 환경에 따라 몇 분 정도 소요 될 수 있어요.</p>
    </div>
  );
};

type AddButtonProps = {
  onClick: () => void;
};

const AddButton = ({ onClick }: AddButtonProps) => (
  <div className="mt-4 flex justify-center">
    <button
      type="button"
      className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white"
      onClick={onClick}
    >
      <FaPlus />
    </button>
  </div>
);

type SubmitButtonProps = {
  onClick: () => void;
};

const SubmitButton = ({ onClick }: SubmitButtonProps) => (
  <div className="mt-8 flex justify-center">
    <button className="rounded-md bg-blue-500 px-4 py-2 text-white" onClick={onClick}>
      생성
    </button>
  </div>
);

const Components = {
  CreationLoading,
  AddButton,
  SubmitButton,
};

export default Components;
