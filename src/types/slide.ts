interface Slide {
  title: string;
  description: string;
  slide_number: number;
}

export interface SlideResponse {
  slides: Slide[];
}
