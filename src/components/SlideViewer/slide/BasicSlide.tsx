import Components from './Components';

type BasicSlideProps = {
  title: string;
  description: string;
  handleTitleChange: (value: string) => void;
  handleDescriptionChange: (value: string) => void;
  readOnly?: boolean;
};

const BasicSlide = ({ title, description, handleTitleChange, handleDescriptionChange, readOnly }: BasicSlideProps) => {
  return (
    <Components.Container>
      <div className="h-[20%]">
        <Components.Title
          readOnly={readOnly}
          value={title}
          className="border-b-2 border-gray-300"
          onChange={handleTitleChange}
        />
      </div>
      <div className="h-[80%] pt-4">
        <Components.Description readOnly={readOnly} value={description} onChange={handleDescriptionChange} />
      </div>
    </Components.Container>
  );
};

export default BasicSlide;
