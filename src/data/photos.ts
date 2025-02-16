import { CategoryData } from "../types";

export interface Photo {
  id: string;
  category: string;
  url: string;
  alt: string;
}

export const categories: CategoryData[] = [
  {
    name: "portraits",
    title: "Portraits",
    description: "Capturing the essence of human expression",
  },
  {
    name: "cars",
    title: "Cars",
    description: "Automotive beauty in its purest form",
  },
  {
    name: "architecture",
    title: "Architecture",
    description: "The art of structural design",
  },
  {
    name: "motorbikes",
    title: "Motorbikes",
    description: "Two-wheeled masterpieces",
  },
];

export const photos: Photo[] = [
  {
    id: "1",
    category: "portraits",
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    alt: "Portrait of a woman with natural light",
  },
  {
    id: "2",
    category: "cars",
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
    alt: "Vintage car front view",
  },
  {
    id: "3",
    category: "architecture",
    url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80",
    alt: "Modern building facade",
  },
  {
    id: "4",
    category: "motorbikes",
    url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80",
    alt: "Classic motorcycle side view",
  },
];
