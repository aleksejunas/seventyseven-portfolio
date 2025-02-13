import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import groq from "groq";

export const client = createClient({
  projectId: "tndmjdps",
  dataset: "production",
  apiVersion: "2024-02-13", // Use today's date or when you created the project
  useCdn: true, // `false` if you want to ensure fresh data
});

// Set up image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any): ImageUrlBuilder {
  return builder.image(source);
}

export const photosByCategory = groq`*[_type == "photo" && category == $category] {
  _id,
  title,
  category,
  image,
  alt
}`;
