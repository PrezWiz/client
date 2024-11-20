import { FaPlus } from 'react-icons/fa';

interface AddSlideButtonProps {
  onClick: () => void;
}

const AddSlideButton = ({ onClick }: AddSlideButtonProps) => (
  <div className="mt-4 flex justify-center">
    <button
      className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white"
      onClick={onClick}
    >
      <FaPlus />
    </button>
  </div>
);

export default AddSlideButton;
