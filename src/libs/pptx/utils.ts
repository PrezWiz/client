import {
  PPT_CONTENT_PRESET,
  PPT_COVER_CONTENT_PRESET,
  PPT_COVER_TITLE_PRESET,
  PPT_DIVIDER_PRESET,
  PPT_TITLE_PRESET,
} from './preset';
import type pptxgen from 'pptxgenjs';

export const getCoverTitlePreset = (align: pptxgen.AlignV) => ({
  ...PPT_COVER_TITLE_PRESET,
  valign: align,
});

export const getCoverContentPreset = (align: pptxgen.AlignV) => ({
  ...PPT_COVER_CONTENT_PRESET,
  valign: align,
});

export const getTitlePreset = (align: pptxgen.AlignV) => ({
  ...PPT_TITLE_PRESET,
  valign: align,
});

export const getDividerPreset = (shape: pptxgen.ShapeType) => ({
  ...PPT_DIVIDER_PRESET,
  shape,
});

export const getContentPreset = (align: pptxgen.AlignV) => ({
  ...PPT_CONTENT_PRESET,
  valign: align,
});

export const generateFileName = (input: string) => {
  const invalidChars = /[<>:"/\\|?*()]/g;

  return input.replace(invalidChars, '').replace(/\s+/g, '_');
};
