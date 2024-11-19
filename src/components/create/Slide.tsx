import { useState } from 'react';
import { FaEdit, FaSave, FaTrash } from 'react-icons/fa';

interface SlideProps {
  slide_number: number;
  title?: string;
  description?: string;
  onDelete: () => void;
  onEdit: (updatedTitle: string, updatedDescription: string) => void;
  isEditing?: boolean; // 새 슬라이드를 추가할 때 수정 모드로 시작
}

const Slide = ({ slide_number, title = '', description = '', onDelete, onEdit, isEditing = false }: SlideProps) => {
  const [isEditingState, setIsEditing] = useState<boolean>(isEditing); // 수정 모드 여부
  const [editTitle, setEditTitle] = useState<string>(title); // 수정 중인 제목
  const [editDescription, setEditDescription] = useState<string>(description); // 수정 중인 설명

  const handleSave = () => {
    onEdit(editTitle, editDescription); // 부모 컴포넌트에 수정된 값 전달
    setIsEditing(false); // 수정 모드 종료
  };

  return (
    <div className="flex items-start justify-between rounded-md border p-4">
      {isEditingState ? (
        <div className="flex-1">
          {/* 수정 모드: 제목과 설명을 입력할 수 있음 */}
          <input
            type="text"
            value={editTitle}
            className="mb-2 w-full rounded-md border p-2"
            placeholder="슬라이드 제목"
            onChange={e => setEditTitle(e.target.value)}
          />
          <textarea
            value={editDescription}
            className="w-full rounded-md border p-2"
            placeholder="슬라이드 설명"
            onChange={e => setEditDescription(e.target.value)}
          />
          <button className="mt-2 flex items-center rounded-md bg-green-500 p-2 text-white" onClick={handleSave}>
            <FaSave className="mr-2" />
            저장
          </button>
        </div>
      ) : (
        <div className="flex-1">
          {/* 보기 모드: 제목과 설명 표시 */}
          <p className="mt-2 text-sm text-gray-500">Slide {slide_number}</p>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2 text-gray-700">{description}</p>
        </div>
      )}
      <div className="flex space-x-2">
        {!isEditingState && (
          <>
            <button
              className="p-1 text-blue-500"
              onClick={() => setIsEditing(true)} // 수정 모드로 변경
            >
              <FaEdit />
            </button>
            <button className="p-1 text-red-500" onClick={onDelete}>
              <FaTrash />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Slide;
