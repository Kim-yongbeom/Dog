export interface Breeds {
  id: string;
  name: string;
  temperament: string;
  life_span: string;
  alt_names: string;
  wikipedia_url: string;
  origin: string;
  weight: object;
  country_code: string;
  height: object;
}

export interface Categories {
  id: number;
  name: string;
}

export interface ImageState {
  id: string | null;
  url: string | null;
  loading: boolean;
  error: Error | null;
}
