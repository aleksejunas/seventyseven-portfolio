import { ChevronLeft, ChevronRight, Grid, List } from 'lucide-react';
import { categories } from '../data/photos';
import { Category } from '../types';

interface NavigationProps {
  currentCategory: Category;
  onCategoryChange: (category: Category) => void;
  onViewChange: () => void;
  isGridView: boolean;
}

export function Navigation({ currentCategory, onCategoryChange, onViewChange, isGridView }: NavigationProps) {
  const currentIndex = categories.findIndex(c => c.name === currentCategory);

  const navigate = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + categories.length) % categories.length
      : (currentIndex + 1) % categories.length;
    onCategoryChange(categories[newIndex].name);
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8">
      <button
        onClick={() => navigate('prev')}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
        aria-label="Previous category"
      >
        <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      </button>

      <button
        onClick={onViewChange}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
        aria-label="Toggle view"
      >
        {isGridView ? (
          <List className="w-5 h-5 text-gray-800 dark:text-gray-200" />
        ) : (
          <Grid className="w-5 h-5 text-gray-800 dark:text-gray-200" />
        )}
      </button>

      <button
        onClick={() => navigate('next')}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
        aria-label="Next category"
      >
        <ChevronRight className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      </button>
    </div>
  );
}
