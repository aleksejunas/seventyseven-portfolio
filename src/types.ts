export type Category = 'portraits' | 'cars' | 'architecture' | 'motorbikes';

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Photo {
  _id: string;
  title: string;
  category: Category;
  image: SanityImage;
  alt: string;
}

export interface CategoryData {
  name: Category;
  title: string;
  description: string;
}