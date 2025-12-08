'use client';

import { useState, useMemo } from 'react';
import BoxReveal from '@/components/box-reveal';
import FilterBar from '@/components/filter-bar';
import { movies } from '@/lib/movies';

export default function Home() {
  const [selectedDecade, setSelectedDecade] = useState<string | null>(null);
  const [recentMovies, setRecentMovies] = useState<Set<string>>(new Set());

  // Memoize the filtered list so we don't re-calculate on every render
  const filteredMovies = useMemo(() => {
    if (!selectedDecade) return movies;

    const startYear = parseInt(selectedDecade.substring(0, 4));
    const endYear = startYear + 9;

    return movies.filter(movie => movie.year >= startYear && movie.year <= endYear);
  }, [selectedDecade]);

  // Reset history when filter changes
  useMemo(() => {
    setRecentMovies(new Set());
  }, [selectedDecade]);

  const getRandomMovie = () => {
    // Filter out recently shown movies to avoid repeats
    const availableMovies = filteredMovies.filter(movie => !recentMovies.has(movie.name as string));

    // If we've shown all movies in the current filter (or close to it), reset history
    // We keep a buffer of the last 50% or max 20 movies to ensure variety
    if (availableMovies.length === 0) {
      setRecentMovies(new Set());
      // Recalculate with full list
      const randomIndex = Math.floor(Math.random() * filteredMovies.length);
      const movie = filteredMovies[randomIndex];
      setRecentMovies(new Set([movie.name as string]));
      return movie;
    }

    const randomIndex = Math.floor(Math.random() * availableMovies.length);
    const movie = availableMovies[randomIndex];

    // Update history
    setRecentMovies(prev => {
      const newSet = new Set(prev);
      newSet.add(movie.name as string);
      // Keep history size manageable (e.g., max 50 items or 50% of list)
      if (newSet.size > Math.min(50, Math.floor(filteredMovies.length / 2))) {
        const firstItem = newSet.values().next().value;
        if (firstItem) newSet.delete(firstItem);
      }
      return newSet;
    });

    return movie;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-4 overflow-hidden">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-4 pb-2">
          Whatsinthebox?
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Tired of choosing which movie to watch next? Open the box to find out.
        </p>

        <FilterBar 
          selectedDecade={selectedDecade} 
          onSelectDecade={setSelectedDecade} 
        />
        
        <BoxReveal onReveal={getRandomMovie} />
      </div>
    </main>
  );
}
