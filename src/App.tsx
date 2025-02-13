import { useState, useEffect } from "react";
import { Category, Photo } from "./types";
import { Navigation } from "./components/Navigation";
import { ThemeToggle } from "./components/ThemeToggle";
import { categories } from "./data/photos";
import { Instagram } from "lucide-react";
import { client, urlFor, photosByCategory } from "./lib/sanity";

// TODO: Enable image click for bigger image

function App() {
  const [currentCategory, setCurrentCategory] =
    useState<Category>("architecture");
  const [isGridView, setIsGridView] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const fetchedPhotos = await client.fetch(photosByCategory, {
          category: currentCategory,
        });
        setPhotos(fetchedPhotos);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [currentCategory]);

  const categoryData = categories.find((c) => c.name === currentCategory)!;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <header className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50">
        <h1 className="text-2xl font-light text-gray-800 dark:text-gray-200">
          seventyseven
        </h1>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
          >
            <Instagram className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main className="pt-20 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-2">
              {categoryData.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {categoryData.description}
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800 dark:border-gray-200"></div>
            </div>
          ) : (
            <div
              className={`grid ${isGridView ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "grid-cols-1 gap-16"}`}
            >
              {photos.map((photo) => (
                <div
                  key={photo._id}
                  className="aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <img
                    src={urlFor(photo.image).width(1200).url()}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Navigation
        currentCategory={currentCategory}
        onCategoryChange={setCurrentCategory}
        onViewChange={() => setIsGridView(!isGridView)}
        isGridView={isGridView}
      />
    </div>
  );
}

export default App;
