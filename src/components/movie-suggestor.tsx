'use client';

import { useState } from 'react';
import { movies, Movie } from '@/lib/movies';

export default function MovieSuggestor() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const generateRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    setSelectedMovie(movies[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-8 p-4">
      <button
        onClick={generateRandomMovie}
        className="px-6 py-3 text-lg font-semibold text-white transition-all transform bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Select Random Movie
      </button>

      {selectedMovie && (
        <div className="flex flex-col items-center space-y-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200">
            The movie from the box is{' '}
            <span className="font-bold text-purple-600 dark:text-purple-400">
              {selectedMovie.name}
            </span>{' '}
            <span className="text-gray-500">({selectedMovie.year})</span>
          </p>
          
          <a
            href={selectedMovie.letterboxdLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-purple-600 bg-purple-100 rounded-md hover:bg-purple-200 transition-colors dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50"
          >
            Get Details
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
