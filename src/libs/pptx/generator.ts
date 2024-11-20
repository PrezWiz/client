import pptxgen from 'pptxgenjs';
import { Slide } from '@/types/slide';
import { generateFileName, getContentPreset, getDividerPreset, getTitlePreset } from './utils';

const generatePPT = (slides: Slide[]) => {
  const pres = new pptxgen();

  slides.forEach(slide => {
    const slot = pres.addSlide();

    slot.addText(slide.title, getTitlePreset(pres.AlignV.middle));
    slot.addText('divider', getDividerPreset(pres.ShapeType.line));
    slot.addText(slide.content, getContentPreset(pres.AlignV.top));
  });

  pres.writeFile({ fileName: generateFileName(slides[0].title) });
};

export default generatePPT;
