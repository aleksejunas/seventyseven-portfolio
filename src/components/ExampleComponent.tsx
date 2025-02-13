import { useSanityQuery } from "../hooks/useSanityQuery";
import { urlFor } from "../lib/sanity";

interface Photo {
  _id: string;
  title: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}

export function ExampleComponent() {
  const { data, loading, error } = useSanityQuery<Photo[]>(`
    *[_type == "photo"] {
      _id,
      title,
      image
    }
  `);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <div>
      {data.map((photo) => (
        <div key={photo._id}>
          <h2>{photo.title}</h2>
          <img src={urlFor(photo.image).width(800).url()} alt={photo.title} />
        </div>
      ))}
    </div>
  );
}
