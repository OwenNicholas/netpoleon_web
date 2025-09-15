'use client';

import { motion } from 'framer-motion';

interface ImageTextSectionProps {
  ctaText?: string;
  ctaLink?: string;
}

export default function ImageTextSection({
  ctaText = '• View all our sectors',
}: ImageTextSectionProps) {
  return (
    <section className="pt-15 pb-3 -mb-50 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title with CTA Button */}
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-orange-900 leading-tight max-w-4xl">
              Cybersecurity transforms digital risks into opportunities for
              resilience and growth. It empowers organizations to operate with
              confidence, enabling more agile, secure, and future-ready business
              models.
            </h2>
          </div>
          <div className="ml-8">
            <button className="bg-orange-200 hover:bg-orange-300 text-orange-900 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              {ctaText}
            </button>
          </div>
        </motion.div>

        {/* Navigation Arrows and Cards Container */}
        <div className="flex items-start gap-8">
          {/* Navigation Controls */}
          <motion.div
            className="flex flex-col items-center gap-4 mt-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Page Number */}
            <div className="bg-orange-200 px-4 py-2 rounded-lg -my-10">
              <span className="text-sm text-orange-600">1 • 2</span>
            </div>

            {/* Navigation Arrows - Left on top, Right below */}
            <div className="flex flex-col gap-2 my-90">
              <button className="w-12 h-12 bg-orange-200 hover:bg-orange-300 rounded-lg flex items-center justify-center transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-orange-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="w-12 h-12 bg-orange-200 hover:bg-orange-300 rounded-lg flex items-center justify-center transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-orange-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Three Cards */}
          <div className="flex-1 grid md:grid-cols-3 gap-6">
            {/* Smart Logistics Card */}
            <motion.div
              className="bg-orange-100 rounded-2xl p-6 relative overflow-hidden flex flex-col h-120"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <h3
                  className="font-bold text-orange-900 mb-3 leading-none"
                  style={{ fontSize: '50px' }}
                >
                  Enterprise Level
                </h3>
                <p className="text-orange-800 text-xl leading-relaxed">
                  Comprehensive solutions for large-scale organizations
                </p>
              </div>

              {/* Enterprise Security Shield Graphic */}
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-16 opacity-40">
                  <div className="relative w-full h-full">
                    {/* Building/Enterprise Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-24 bg-gradient-to-b from-orange-600 to-orange-800 rounded-lg relative">
                        {/* Windows */}
                        <div className="absolute top-2 left-2 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-5 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-8 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-11 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-14 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-17 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-20 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-23 w-2 h-2 bg-orange-200 rounded"></div>

                        <div className="absolute top-6 left-2 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-6 left-5 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-6 left-8 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-6 left-11 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-6 left-14 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-6 left-17 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-6 left-20 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-6 left-23 w-2 h-2 bg-orange-200 rounded"></div>

                        <div className="absolute top-10 left-2 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-10 left-5 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-10 left-8 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-10 left-11 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-10 left-14 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-10 left-17 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-10 left-20 w-2 h-2 bg-orange-200 rounded"></div>
                        <div className="absolute top-10 left-23 w-2 h-2 bg-orange-200 rounded"></div>
                      </div>
                    </div>

                    {/* Security Shield */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    {/* Network connections */}
                    <div className="absolute top-8 left-0 w-4 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-8 right-0 w-4 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-12 left-0 w-6 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-12 right-0 w-6 h-0.5 bg-orange-400"></div>
                  </div>
                </div>
              </div>

              {/* Know more button at bottom */}
              <div className="mt-4">
                <button className="text-orange-900 text-sm font-medium border border-orange-300 px-4 py-2 rounded-lg hover:bg-orange-200 transition-colors duration-300">
                  • Know more
                </button>
              </div>
            </motion.div>

            {/* Smart Industry Card */}
            <motion.div
              className="bg-orange-100 rounded-2xl p-6 relative overflow-hidden flex flex-col h-120"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <h3
                  className="font-bold text-orange-900 mb-3 leading-none"
                  style={{ fontSize: '50px' }}
                >
                  Midmarket Level
                </h3>
                <p className="text-orange-800 text-xl leading-relaxed">
                  Tailored solutions for growing medium-sized businesses
                </p>
              </div>

              {/* Midmarket Office Building Graphic */}
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-16 opacity-40">
                  <div className="relative w-full h-full">
                    {/* Office Building/Factory Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-20 bg-gradient-to-b from-orange-500 to-orange-700 rounded-lg relative">
                        {/* Windows - smaller, more industrial */}
                        <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-4 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-6 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-8 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-10 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-12 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-14 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-16 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-18 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-20 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-22 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-2 left-24 w-1.5 h-1.5 bg-orange-200 rounded"></div>

                        <div className="absolute top-5 left-2 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-5 left-4 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-5 left-6 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-5 left-8 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-5 left-10 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-5 left-12 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-5 left-14 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-5 left-16 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-5 left-18 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-5 left-20 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-5 left-22 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-5 left-24 w-1.5 h-1.5 bg-orange-200 rounded"></div>

                        <div className="absolute top-8 left-2 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-8 left-4 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-8 left-6 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-8 left-10 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-8 left-12 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-8 left-14 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-8 left-16 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-8 left-18 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-8 left-20 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-8 left-22 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                        <div className="absolute top-8 left-24 w-1.5 h-1.5 bg-orange-200 rounded"></div>
                      </div>
                    </div>

                    {/* Growth Arrow */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    {/* Connection lines */}
                    <div className="absolute top-6 left-0 w-3 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-6 right-0 w-3 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-10 left-0 w-4 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-10 right-0 w-4 h-0.5 bg-orange-400"></div>
                  </div>
                </div>
              </div>

              {/* Know more button at bottom */}
              <div className="mt-4">
                <button className="text-orange-900 text-sm font-medium border border-orange-300 px-4 py-2 rounded-lg hover:bg-orange-200 transition-colors duration-300">
                  • Know more
                </button>
              </div>
            </motion.div>

            {/* Smart City Card */}
            <motion.div
              className="bg-orange-100 rounded-2xl p-6 relative overflow-hidden flex flex-col h-120"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <h3
                  className="font-bold text-orange-900 mb-3 leading-none"
                  style={{ fontSize: '50px' }}
                >
                  Innovative Startup
                </h3>
                <p className="text-orange-800 text-xl leading-relaxed">
                  Cutting-edge solutions for emerging technology companies
                </p>
              </div>

              {/* Innovative Startup Tech Hub Graphic */}
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-16 opacity-40">
                  <div className="relative w-full h-full">
                    {/* Modern Tech Building Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-16 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg relative">
                        {/* Modern windows - irregular pattern */}
                        <div className="absolute top-1 left-1 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-1 left-4 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-1 left-7 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-1 left-10 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-1 left-13 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-1 left-16 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-1 left-19 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-1 left-22 w-2 h-2 bg-orange-100 rounded"></div>

                        <div className="absolute top-4 left-2 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-4 left-5 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-4 left-8 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-4 left-11 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-4 left-14 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-4 left-17 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-4 left-20 w-2 h-2 bg-orange-100 rounded"></div>

                        <div className="absolute top-7 left-1 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-7 left-4 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-7 left-7 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-7 left-10 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-7 left-13 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-7 left-16 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-7 left-19 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-7 left-22 w-2 h-2 bg-orange-100 rounded"></div>

                        <div className="absolute top-10 left-2 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-10 left-5 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-10 left-8 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-10 left-11 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-10 left-14 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-10 left-17 w-2 h-2 bg-orange-100 rounded"></div>
                        <div className="absolute top-10 left-20 w-2 h-2 bg-orange-100 rounded"></div>
                      </div>
                    </div>

                    {/* Innovation Lightbulb */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1z" />
                      </svg>
                    </div>

                    {/* Tech connections - more dynamic */}
                    <div className="absolute top-3 left-0 w-2 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-3 right-0 w-2 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-6 left-0 w-3 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-6 right-0 w-3 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-9 left-0 w-4 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-9 right-0 w-4 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-12 left-0 w-5 h-0.5 bg-orange-400"></div>
                    <div className="absolute top-12 right-0 w-5 h-0.5 bg-orange-400"></div>
                  </div>
                </div>
              </div>

              {/* Know more button at bottom */}
              <div className="mt-4">
                <button className="text-orange-900 text-sm font-medium border border-orange-300 px-4 py-2 rounded-lg hover:bg-orange-200 transition-colors duration-300">
                  • Know more
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
