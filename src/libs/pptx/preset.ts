import type pptxgen from 'pptxgenjs';

export const PPT_TITLE_PRESET: pptxgen.TextPropsOptions = {
  x: '3.5%',
  y: '5%',
  color: '363636',
  fontSize: 32,
  w: '93%',
  h: '20%',
  bold: true,
  breakLine: true,
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
  y: '25%',
  h: '75%',
  w: '93%',
  color: '363636',
  lineSpacing: 16 * 1.6,
  fontSize: 16,
};
