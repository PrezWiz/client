import toast from 'react-hot-toast';
import pptxgen from 'pptxgenjs';
import { Slide } from '@/types/presentation';
import { generateFileName, getContentPreset, getDividerPreset, getTitlePreset } from './utils';

const generatePPT = (slides: Slide[]) => {
  const pres = new pptxgen();

  slides.forEach(slide => {
    const slot = pres.addSlide();

    slot.addText(slide.title, getTitlePreset(pres.AlignV.middle));
    slot.addText('', getDividerPreset(pres.ShapeType.line));
    slot.addText(slide.content, getContentPreset(pres.AlignV.top));
  });

  try {
    pres.writeFile({ fileName: generateFileName(slides[0].title) });
  } catch (error) {
    toast.error('파일 생성에 실패했어요. 다시 시도해주세요.');
  }
};

export default generatePPT;
