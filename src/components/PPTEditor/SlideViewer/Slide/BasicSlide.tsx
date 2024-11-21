import Slide from './Slide';

type BasicSlideProps = {
  title: string;
  description: string;
  handleTitleChange: (value: string) => void;
  handleDescriptionChange: (value: string) => void;
};

const BasicSlide = ({ title, description, handleTitleChange, handleDescriptionChange }: BasicSlideProps) => {
  return (
    <Slide.Container>
      <div className="h-[20%]">
        <Slide.Title value={title} className="border-b-2 border-gray-300" onChange={handleTitleChange} />
      </div>
      <div className="h-[80%] pt-4">
        <Slide.Description value={description} onChange={handleDescriptionChange} />
      </div>
    </Slide.Container>
  );
};

export default BasicSlide;
