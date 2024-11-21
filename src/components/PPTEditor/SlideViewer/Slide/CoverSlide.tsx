import Slide from './Slide';

type CoverSlideProps = {
  title: string;
  description: string;
  handleTitleChange: (value: string) => void;
  handleDescriptionChange: (value: string) => void;
};

const CoverSlide = ({ title, description, handleTitleChange, handleDescriptionChange }: CoverSlideProps) => {
  return (
    <Slide.Container>
      <div className="h-[65%]">
        <Slide.Title value={title} className="text-center text-5xl" onChange={handleTitleChange} />
      </div>
      <div className="h-[35%] pt-4">
        <Slide.Description value={description} className="text-center text-lg" onChange={handleDescriptionChange} />
      </div>
    </Slide.Container>
  );
};

export default CoverSlide;
