export interface PanonoApp {
  count: number;
  items: Item[];
  next: string;
  offset: string;
}

export interface Item {
  type: string;
  id: string;
  self: string;
  data: Data;
}

export interface Data {
  image_id: string;
  images: Images;
  title?: string;
  description?: string;
  created_at: string;
  privacy: string;
  watermark?: Watermark;
  featured_at: string;
  published_at: string;
  author: Author;
  allow_share: boolean;
}

export interface Author {
  type: string;
  id: string;
  self: string;
  data: Data;
}

export interface Data {
  username: string;
  display_name: string;
}

export interface Watermark {
  show: boolean;
}

export interface Images {
  thumbnails: Thumbnail[];
  cubemaps: Cubemap[];
  previews: Preview[];
  equirectangulars: any[];
  orientation: number[];
}

export interface Preview {
  width: number;
  content_type: string;
  url: string;
}

export interface Cubemap {
  size: number;
  lod: number;
  content_type: string;
  format: string;
  base_url: string;
}

export interface Thumbnail {
  height: number;
  width: number;
  url: string;
  content_type: string;
}
