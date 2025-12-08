'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Movie } from '@/lib/movies';

interface BoxRevealProps {
  onReveal: () => Movie;
}

export default function BoxReveal({ onReveal }: BoxRevealProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [movie, setMovie] = useState<Movie | null>(null);

  const handleOpen = () => {
    if (isOpen) {
      // If already open, close briefly then reopen with new movie
      setIsOpen(false);
      setMovie(null);
      
      // Small delay to allow close animation to start before shaking again
      setTimeout(() => {
        startRevealSequence();
      }, 200);
      return;
    }

    startRevealSequence();
  };

  const startRevealSequence = () => {
    setIsShaking(true);
    
    // Shake duration
    setTimeout(() => {
      setIsShaking(false);
      setIsOpen(true);
      const randomMovie = onReveal();
      setMovie(randomMovie);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full max-w-md mx-auto relative">
      <div className="relative w-64 h-64 cursor-pointer perspective-1000" onClick={handleOpen}>
        
        {/* Box Container - moves when shaking */}
        <motion.div
          className="relative w-full h-full"
          animate={isShaking ? { x: [-5, 5, -5, 5, 0] } : {}}
          transition={{ duration: 0.5, repeat: 1 }}
        >
          {/* Box Back (Inside) */}
          <div className="absolute bottom-0 w-64 h-48 bg-indigo-900 rounded-b-xl z-10" />

          {/* Content Area (Inside the box) */}
          <div className="absolute bottom-0 w-64 h-48 z-20 flex items-center justify-center overflow-hidden rounded-b-xl p-4">
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.span
                  key="question"
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/20 text-6xl font-bold"
                >
                  ?
                </motion.span>
              ) : (
                movie && (
                  <motion.div
                    key="movie"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col items-center text-center w-full h-full justify-center"
                  >
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
                      {movie.name}
                    </h3>
                    <p className="text-indigo-200 text-sm mb-3">({movie.year})</p>
                    
                    <a
                      href={movie.letterboxdLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="px-3 py-1 bg-white text-purple-600 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors shadow-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Details
                    </a>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>

          {/* Box Front (Translucent/Gradient to see inside slightly or just cover bottom) 
              Actually, if we want to see the content "inside", the front face needs to be either:
              1. Behind the content? No, front face is in front.
              2. We are looking "into" the box from top-front?
              
              Let's make the "Front" face cover the content, but maybe we are looking at the *open* box.
              If the lid opens, we see inside.
              
              Let's adjust: 
              - Back face (dark)
              - Content (middle)
              - Front face (gradient) -> This covers the content if z-index is higher.
              
              If the user wants the movie *inside* the box, we should probably remove the full opaque front face 
              OR make the movie appear "sticking out" or "on the face".
              
              "Lid is opened, and the question mark is replaced by the movie".
              This implies we are looking at the front/inside.
              
              Let's try this:
              - The "Front" face is actually the "Body" of the box.
              - The Question Mark was on the "Body".
              - The User wants the Question Mark *replaced* by the movie.
              
              So the Movie should appear ON the front face? Or INSIDE?
              "find a movie title" implies inside.
              
              Let's go with:
              - Back Face
              - Content (Question Mark -> Movie)
              - Front Face (Glassy/Transparent?) OR just put the content ON the front face?
              
              Re-reading: "lid is opened, and the question mark is replaced by the movie"
              
              If the lid opens, we usually look inside.
              Let's put the content *inside* the box (z-index between back and front), 
              and make the front face slightly lower or transparent?
              
              Actually, standard "box" UI:
              - Back rect
              - Content
              - Front rect (shorter? or same height).
              
              If I put the content *on* the front face, the lid opening is just decoration.
              If I put the content *inside*, the front face obscures it unless the front face is lower.
              
              Let's try a "Open Box" view where we see the inside back/bottom.
              
              Revised Plan:
              - Lid (Top) rotates up.
              - Front Face (Bottom) stays.
              - Content is *inside* (z-index lower than Front Face? No, then it's hidden).
              
              Maybe the "Question Mark" was on the Front Face?
              In my previous code: `span` was inside `motion.div` (Front Face).
              
              So, I will replace the content of the Front Face `motion.div`.
          */}
          
          {/* Box Front Face */}
          <motion.div
            className="absolute bottom-0 w-64 h-48 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-b-xl shadow-2xl z-30 flex items-center justify-center p-6 text-center"
          >
             <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.span
                  key="question"
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="text-white/20 text-6xl font-bold"
                >
                  ?
                </motion.span>
              ) : (
                movie && (
                  <motion.div
                    key="movie"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="flex flex-col items-center justify-center w-full h-full"
                  >
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                      {movie.name}
                    </h3>
                    <p className="text-indigo-100 text-sm mb-3 font-medium">({movie.year})</p>
                    
                    <a
                      href={movie.letterboxdLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs font-bold hover:bg-white/20 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                    </a>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </motion.div>

          {/* Box Lid */}
          <motion.div
            className="absolute top-16 w-64 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-t-xl z-20 origin-bottom shadow-lg"
            initial={{ rotateX: 0 }}
            animate={{ 
              rotateX: isOpen ? -110 : 0,
              y: isShaking ? [0, -2, 0] : 0
            }}
            transition={{ 
              rotateX: { duration: 0.6, type: "spring" },
              y: { duration: 0.2, repeat: 5 }
            }}
          />
          
        </motion.div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpen}
        className="mt-12 px-8 py-3 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-bold rounded-full shadow-lg border border-purple-100 dark:border-purple-900 hover:shadow-xl transition-all"
      >
        {isOpen ? "Pick Another" : "What's in the box?"}
      </motion.button>
    </div>
  );
}
