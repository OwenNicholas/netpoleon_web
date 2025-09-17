// components/Statistics.tsx
'use client';

import { useRef, useState, useEffect } from 'react';

export default function Statistics() {
  const [stats, setStats] = useState([
    {
      id: 1,
      target: 60,
      current: 0,
      prefix: '+',
      suffix: '',
      label: 'cloud services available globally',
    },
    {
      id: 2,
      target: 190,
      current: 0,
      prefix: '',
      suffix: 'B',
      label: 'cyber threats blocked each day',
    },
    {
      id: 3,
      target: 20,
      current: 0,
      prefix: '',
      suffix: '%',
      label: 'of all websites are protected by Netpoleon',
    },
    {
      id: 4,
      target: 330,
      current: 0,
      prefix: '+',
      suffix: '',
      label: 'cities in 125+ countries, including mainland China',
    },
  ]);

  const [animationStarted, setAnimationStarted] = useState(false);
  const ref = useRef(null);

  // Custom intersection observer for more reliable detection
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animationStarted) {
            console.log('Statistics section in view, starting animation...');
            setAnimationStarted(true);
            startAnimation();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Start slightly before fully in view
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animationStarted]);

  // Remove fallback timer - animation only starts when in view

  const startAnimation = () => {
    const duration = 4000; // 4 seconds (increased from 2 seconds)
    const interval = 100; // Update every 100ms (increased from 50ms for smoother counting)
    const steps = duration / interval;

    const timer = setInterval(() => {
      setStats(prevStats =>
        prevStats.map(stat => {
          const increment = stat.target / steps;
          const newCurrent = Math.min(stat.current + increment, stat.target);

          return {
            ...stat,
            current: Math.round(newCurrent),
          };
        })
      );
    }, interval);

    // Cleanup timer after animation completes
    setTimeout(() => {
      clearInterval(timer);
    }, duration + 100);
  };

  return (
    <div
      ref={ref}
      className="relative w-full min-h-[500px] bg-orange-100 py-16"
    >
      {/* Statistics Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 ml-70 flex items-center">
        {/* Statistics Text */}
        <div className="flex-1">
          <div className="mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold text-orange-900 mb-8"
              style={{ fontSize: '16px' }}
            >
              Netpoleon in a few figures
            </h2>
          </div>

          <div className="flex flex-col -space-y-14 -mt-9">
            {stats.map(stat => (
              <div key={stat.id} className="flex items-center space-x-8">
                {/* Large number */}
                <div
                  className="font-bold text-orange-900"
                  style={{ fontSize: '130px' }}
                >
                  {stat.current === 0 ? '' : stat.prefix}
                  {stat.current}
                  {stat.current === 0 ? '' : stat.suffix}
                </div>
                {/* Descriptive text */}
                <div
                  className="text-orange-800 font-medium flex-1 whitespace-pre-line -mt-9"
                  style={{ fontSize: '16px' }}
                >
                  {stat.label.split(' ').reduce((acc, word, index) => {
                    if (index > 0 && index % 4 === 0) {
                      return acc + '\n' + word;
                    }
                    return acc + (index === 0 ? '' : ' ') + word;
                  }, '')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
