import type pptxgen from 'pptxgenjs';

export const PPT_COVER_TITLE_PRESET: pptxgen.TextPropsOptions = {
  x: '3.5%',
  y: '5%',
  color: '363636',
  fontSize: 36,
  w: '93%',
  h: '40%',
  bold: true,
  breakLine: true,
  align: 'center',
  fontFace: 'Noto Sans KR',
  line: {
    width: 1,
    dashType: 'dash',
  },
};

export const PPT_COVER_CONTENT_PRESET: pptxgen.TextPropsOptions = {
  x: '3.5%',
  y: '45%',
  h: '55%',
  w: '93%',
  color: '363636',
  align: 'center',
  fontFace: 'Noto Sans KR',
  lineSpacing: 12 * 1.6,
  fontSize: 12,
};

export const PPT_TITLE_PRESET: pptxgen.TextPropsOptions = {
  x: '3.5%',
  y: '5%',
  color: '363636',
  fontSize: 32,
  w: '93%',
  h: '20%',
  bold: true,
  breakLine: true,
  fontFace: 'Noto Sans KR',
  line: {
    width: 1,
    dashType: 'dash',
  },
};

export const PPT_DIVIDER_PRESET: pptxgen.TextPropsOptions = {
  x: '3.5%',
  y: '23%',
  w: '93%',
  line: { color: '333333', width: 1, dashType: 'solid' },
};

export const PPT_CONTENT_PRESET: pptxgen.TextPropsOptions = {
  x: '3.5%',
  y: '30%',
  h: '70%',
  w: '93%',
  color: '363636',
  fontFace: 'Noto Sans KR',
  lineSpacing: 16 * 1.7,
  fontSize: 16,
};
