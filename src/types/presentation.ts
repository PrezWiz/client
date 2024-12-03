export interface OutlineType {
  title: string;
  description: string;
  outline_number: number;
}

export interface OutlinesResponse {
  slides: OutlineType[];
}

export interface CreateOutlinesResponse {
  id: number;
  outlines: OutlineType[];
}

export interface SlideType {
  title: string;
  content: string;
}

export interface CreateSlidesRequest {
  id: number;
  outlines: OutlineType[];
}

export interface CreateSlidesResponse {
  slides: SlideType[];
}

export interface UpdateSlidesRequest {
  id: number;
  slides: SlideType[];
}

export interface UpdateSlidesResponse {
  slides: SlideType[];
}

export interface PresentationType {
  id: number;
  topic: string;
  createdAt: string;
}

export interface SlidesResponse {
  presentations: PresentationType[];
}

export interface SlideResponse {
  slides: SlideType[];
}

export interface ScriptRequest {
  id: number;
  slides: SlideType[];
}

export interface ScriptResponse {
  content: string;
}
