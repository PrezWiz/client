export interface Outline {
  title: string;
  description: string;
  slide_number: number;
}

export interface OutlinesResponse {
  slides: Outline[];
}

export interface CreateOutlinesResponse {
  presentationId: number;
  prototypesDto: { slides: Outline[] };
}

export interface Slide {
  title: string;
  content: string;
}

export interface CreateSlidesResponse {
  slides: Slide[];
}
