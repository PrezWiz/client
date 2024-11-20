export interface Slide {
  title: string;
  description: string;
  slide_number: number;
}

export interface SlideResponse {
  slides: Slide[];
}

export interface CreateOutlinesResponse {
  presentationId: number;
  prototypesDto: { slides: Slide[] };
}
export interface CreateSlidesResponse {
  slides: Slide[];
}
