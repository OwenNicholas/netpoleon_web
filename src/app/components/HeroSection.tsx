'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Globe from './Globe';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title }: HeroSectionProps) {
  // Split the title into parts for the split headline design - ensure max 2 lines
  const titleParts = title.split(' ');
  const midPoint = Math.ceil(titleParts.length / 2);
  const firstLine = titleParts.slice(0, midPoint).join(' '); // First half
  const secondLine = titleParts.slice(midPoint).join(' '); // Second half

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Social Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
        {/* Social Animation in top right */}
        {/*
        <div className="absolute -top-10 -right-50 w-full h-full overflow-hidden opacity-60">
          <SocialAnimation />
        </div>
         */}
      </div>

      {/* Globe centered on the right side of second line title */}
      <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 translate-x-1/2 z-0">
        <Globe className="w-[42rem] h-[42rem] md:w-[52rem] md:h-[52rem] lg:w-[62rem] lg:h-[62rem] xl:w-[72rem] xl:h-[72rem]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-16 mt-2">
        {/* 
        <svg class="blob" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(300,300)">
            <path d="M120,-160C160,-120,200,-80,200,-20C200,40,160,100,120,140C80,180,40,200,-20,200C-80,200,-160,180,-180,120C-200,60,-180,-20,-140,-80C-100,-140,-40,-180,20,-180C80,-180,160,-160,120,-160Z" fill="rgba(0, 150, 255, 0.4)"/>
          </g>
        </svg>
        */}

        <AnimatePresence>
          <motion.div
            className="relative z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, delay: 2.0, ease: 'easeOut' }}
          >
            {/* Split Headline */}
            <div className="mb-8 text-left pt-0 -ml-16 md:-ml-24 lg:-ml-32">
              <motion.h1
                className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-gray-900 leading-tight tracking-tight mb-0 whitespace-nowrap text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2, ease: 'easeOut' }}
              >
                {firstLine
                  .split(' ')
                  .map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: 'blur(10px)', opacity: 0 }}
                      animate={{
                        filter: 'blur(0px)',
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 2.2 + index * 0.4,
                        ease: 'easeOut',
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  ))
                  .reduce(
                    (prev, curr, index) =>
                      [
                        ...prev,
                        index > 0 && <span key={`space-${index}`}> </span>,
                        curr,
                      ].filter(Boolean),
                    []
                  )}
              </motion.h1>

              {/* Second line with decorative line on the left */}
              <motion.div
                className="flex items-center justify-start whitespace-nowrap relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4, ease: 'easeOut' }}
              >
                {/* Decorative line - absolutely positioned */}
                <motion.div
                  className="absolute left-0 top-1/2 transform translate-y-2 h-3 bg-gradient-to-r from-orange-600/2 via-orange-600/20 to-orange-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '22.5rem' }}
                  transition={{
                    duration: 1.5,
                    delay:
                      2.2 +
                      (firstLine.split(' ').length +
                        secondLine.split(' ').length) *
                        0.4 +
                      0.5,
                    ease: 'easeOut',
                  }}
                ></motion.div>
                {/* Text positioned to the right of the line */}
                <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-gray-900 leading-tight tracking-tight ml-100">
                  {secondLine
                    .split(' ')
                    .map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ filter: 'blur(10px)', opacity: 0 }}
                        animate={{
                          filter: 'blur(0px)',
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.4,
                          delay:
                            2.2 +
                            firstLine.split(' ').length * 0.4 +
                            index * 0.4,
                          ease: 'easeOut',
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    ))
                    .reduce(
                      (prev, curr, index) =>
                        [
                          ...prev,
                          index > 0 && <span key={`space-${index}`}> </span>,
                          curr,
                        ].filter(Boolean),
                      []
                    )}
                </h1>
              </motion.div>
            </div>

            {/* Descriptive Text */}
            <motion.div
              className="text-xs md:text-sm lg:text-base leading-relaxed mb-6 max-w-3xl mx-auto px-8 md:px-12 lg:px-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay:
                  2.2 +
                  (firstLine.split(' ').length + secondLine.split(' ').length) *
                    0.4 +
                  0.2,
                ease: 'easeOut',
              }}
            >
              <p className="text-gray-700 font-normal leading-relaxed mb-2 whitespace-pre-line">
                {(() => {
                  const text =
                    'Netpoleon develops and delivers advanced cybersecurity solutions, dedicated to protecting enterprises and critical industries from evolving digital threats.';
                  const words = text.split(' ');
                  const wordsPerLine = Math.ceil(
                    words.length / Math.ceil(words.length / 6)
                  );
                  return words.reduce((acc, word, index) => {
                    if (index > 0 && index % wordsPerLine === 0) {
                      return acc + '\n' + word;
                    }
                    return acc + (index === 0 ? '' : ' ') + word;
                  }, '');
                })()}
              </p>
              <p className="text-gray-700 font-normal leading-relaxed whitespace-pre-line">
                {(() => {
                  const text =
                    'Compatible with all types of enterprise systems and security frameworks, our cybersecurity solutions seamlessly integrate into existing IT infrastructures.';
                  const words = text.split(' ');
                  const wordsPerLine = Math.ceil(
                    words.length / Math.ceil(words.length / 6)
                  );
                  return words.reduce((acc, word, index) => {
                    if (index > 0 && index % wordsPerLine === 0) {
                      return acc + '\n' + word;
                    }
                    return acc + (index === 0 ? '' : ' ') + word;
                  }, '');
                })()}
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay:
                  2.2 +
                  (firstLine.split(' ').length + secondLine.split(' ').length) *
                    0.4 +
                  0.4,
                ease: 'easeOut',
              }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Learn more
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
