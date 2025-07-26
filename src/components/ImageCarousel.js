'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const ImageCarousel = () => {
  const [isPaused, setIsPaused] = useState(false)

  // Simulando imágenes desde public (reemplaza con tus rutas reales)
  const images = [
    {
      src: '/images/breakfast-1.jpg',
      alt: 'Desayuno nutritivo 1',
      placeholder: '🥞'
    },
    {
      src: '/images/breakfast-2.jpg',
      alt: 'Desayuno nutritivo 2',
      placeholder: '🍳'
    },
    {
      src: '/images/breakfast-3.jpg',
      alt: 'Desayuno nutritivo 3',
      placeholder: '🥑'
    },
    {
      src: '/images/breakfast-4.jpg',
      alt: 'Desayuno nutritivo 4',
      placeholder: '🧇'
    },
    {
      src: '/images/breakfast-5.jpg',
      alt: 'Desayuno nutritivo 5',
      placeholder: '🍓'
    },
    {
      src: '/images/breakfast-6.jpg',
      alt: 'Desayuno nutritivo 6',
      placeholder: '🥐'
    },
    {
      src: '/images/breakfast-7.jpg',
      alt: 'Desayuno nutritivo 7',
      placeholder: '🥯'
    },
    {
      src: '/images/breakfast-8.jpg',
      alt: 'Desayuno nutritivo 8',
      placeholder: '🍌'
    },
    {
      src: '/images/breakfast-9.jpg',
      alt: 'Desayuno nutritivo 9',
      placeholder: '🥨'
    },
    {
      src: '/images/breakfast-10.jpg',
      alt: 'Desayuno nutritivo 10',
      placeholder: '🧈'
    }
  ]

  // Duplicamos las imágenes para crear un loop infinito
  const duplicatedImages = [...images, ...images]

  return (
    <div className="relative max-w-5xl mx-auto overflow-hidden">
      {/* Desktop View - Carrusel continuo */}
      <div className="hidden md:block">
        <motion.div 
          className="flex gap-2"
          animate={{
            x: [0, -100 * images.length + '%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 200, // 60 segundos - mucho más lento
              ease: "linear"
            }
          }}
          style={{
            width: `${duplicatedImages.length * 14.285}%`, // 14.285% por imagen para mostrar 7 a la vez
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={`${index}-${image.placeholder}`}
              className="flex-shrink-0 w-1/7 px-0.5"
              style={{ width: '14.285%' }}
              whileHover={{ scale: 1.02, y: -1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[3/2] rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                {/* Placeholder con gradiente colorido */}
                <div className="w-full h-full bg-gradient-to-br from-emerald-200 via-orange-200 to-emerald-300 flex items-center justify-center">
                  <span className="text-lg md:text-xl">{image.placeholder}</span>
                </div>
                
                {/* Overlay con información */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0.5 left-0.5 text-white">
                    <p className="text-xs font-medium">{(index % images.length) + 1}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile View - Carrusel continuo adaptado */}
      <div className="block md:hidden">
        <motion.div 
          className="flex gap-1.5"
          animate={{
            x: [0, -100 * images.length + '%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45, // Más lento en móvil también
              ease: "linear"
            }
          }}
          style={{
            width: `${duplicatedImages.length * 33.333}%`, // 33.333% por imagen para mostrar 3 a la vez
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`mobile-${index}-${image.placeholder}`}
              className="flex-shrink-0 w-1/3 px-0.5"
            >
              <div className="relative aspect-[3/2] rounded-md overflow-hidden shadow-sm">
                {/* Placeholder colorido */}
                <div className="w-full h-full bg-gradient-to-br from-emerald-200 via-orange-200 to-emerald-300 flex items-center justify-center">
                  <span className="text-xl">{image.placeholder}</span>
                </div>
                
                {/* Overlay con información */}
                <div className="absolute bottom-0.5 left-0.5 text-white bg-black/50 rounded px-1 py-0.5">
                  <p className="text-xs font-medium">{(index % images.length) + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ImageCarousel