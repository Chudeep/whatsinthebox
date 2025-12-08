'use client';

import { useState, useRef, useEffect } from 'react';

interface FilterBarProps {
  selectedDecade: string | null;
  onSelectDecade: (decade: string | null) => void;
}

const decades = ['2020s', '2010s', '2000s', '1990s', '1980s', '1970s', '1960s', '1950s', '1940s'];

export default function FilterBar({ selectedDecade, onSelectDecade }: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative z-50 mb-8" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between min-w-[200px] px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-purple-200 dark:border-purple-900 rounded-full shadow-md text-purple-900 dark:text-purple-100 font-medium transition-all hover:bg-white dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <span>{selectedDecade ? selectedDecade : 'All Decades'}</span>
        <svg
          className={`w-5 h-5 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900 rounded-xl shadow-xl overflow-hidden max-h-60 overflow-y-auto">
          <button
            onClick={() => {
              onSelectDecade(null);
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors ${
              selectedDecade === null ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            All Decades
          </button>
          {decades.map((decade) => (
            <button
              key={decade}
              onClick={() => {
                onSelectDecade(decade);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors ${
                selectedDecade === decade ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {decade}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
