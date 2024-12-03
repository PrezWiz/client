import toast from 'react-hot-toast';
import pptxgen from 'pptxgenjs';
import { SlideType } from '@/types/presentation';
import { generateFileName } from '@/utils/file';
import {
  getContentPreset,
  getCoverContentPreset,
  getCoverTitlePreset,
  getDividerPreset,
  getTitlePreset,
} from './utils';

const generatePPT = (slides: SlideType[]) => {
  const pres = new pptxgen();

  slides.forEach((slide, index) => {
    const slot = pres.addSlide();

    if (index === 0) {
      slot.addText(slide.title, getCoverTitlePreset(pres.AlignV.bottom));
      slot.addText(slide.content, getCoverContentPreset(pres.AlignV.middle));
    } else {
      slot.addText(slide.title, getTitlePreset(pres.AlignV.middle));
      slot.addText('', getDividerPreset(pres.ShapeType.line));
      slot.addText(slide.content, getContentPreset(pres.AlignV.top));
    }
  });

  try {
    pres.writeFile({ fileName: generateFileName(slides[0].title) });
  } catch (error) {
    toast.error('파일 생성에 실패했어요. 다시 시도해주세요.');
  }
};

export default generatePPT;
