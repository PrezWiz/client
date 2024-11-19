interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton = ({ onClick }: SubmitButtonProps) => (
  <div className="mt-8 flex justify-center">
    <button className="rounded-md bg-blue-500 px-4 py-2 text-white" onClick={onClick}>
      생성
    </button>
  </div>
);

export default SubmitButton;
