import Components from './Components';

type CoverSlideProps = {
  title: string;
  description: string;
  handleTitleChange: (value: string) => void;
  handleDescriptionChange: (value: string) => void;
  readOnly?: boolean;
};

const CoverSlide = ({ title, description, handleTitleChange, handleDescriptionChange, readOnly }: CoverSlideProps) => {
  return (
    <Components.Container>
      <div className="h-[65%]">
        <Components.Title
          readOnly={readOnly}
          value={title}
          className="text-center text-5xl"
          onChange={handleTitleChange}
        />
      </div>
      <div className="h-[35%] pt-4">
        <Components.Description
          readOnly={readOnly}
          value={description}
          className="text-center text-lg"
          onChange={handleDescriptionChange}
        />
      </div>
    </Components.Container>
  );
};

export default CoverSlide;
