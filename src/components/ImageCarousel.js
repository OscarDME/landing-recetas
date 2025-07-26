'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const ImageCarousel = () => {
  const [imageErrors, setImageErrors] = useState({})
  const [isClient, setIsClient] = useState(false)

  // Asegurar que se renderice en el cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Array de imágenes con fallbacks múltiples (WebP primero)
  const images = [
    {
      src: '/images/breakfast-1.webp',
      fallbacks: ['/images/breakfast-1.png', '/images/breakfast-1.jpg'],
      alt: 'Desayuno nutritivo 1',
      placeholder: '🥞'
    },
    {
      src: '/images/breakfast-2.webp',
      fallbacks: ['/images/breakfast-2.png', '/images/breakfast-2.jpg'],
      alt: 'Desayuno nutritivo 2',
      placeholder: '🍳'
    },
    {
      src: '/images/breakfast-3.webp',
      fallbacks: ['/images/breakfast-3.png', '/images/breakfast-3.jpg'],
      alt: 'Desayuno nutritivo 3',
      placeholder: '🥑'
    },
    {
      src: '/images/breakfast-4.webp',
      fallbacks: ['/images/breakfast-4.png', '/images/breakfast-4.jpg'],
      alt: 'Desayuno nutritivo 4',
      placeholder: '🧇'
    },
    {
      src: '/images/breakfast-5.webp',
      fallbacks: ['/images/breakfast-5.png', '/images/breakfast-5.jpg'],
      alt: 'Desayuno nutritivo 5',
      placeholder: '🍓'
    },
    {
      src: '/images/breakfast-6.webp',
      fallbacks: ['/images/breakfast-6.png', '/images/breakfast-6.jpg'],
      alt: 'Desayuno nutritivo 6',
      placeholder: '🥐'
    },
    {
      src: '/images/breakfast-7.webp',
      fallbacks: ['/images/breakfast-7.png', '/images/breakfast-7.jpg'],
      alt: 'Desayuno nutritivo 7',
      placeholder: '🥯'
    },
    {
      src: '/images/breakfast-8.webp',
      fallbacks: ['/images/breakfast-8.png', '/images/breakfast-8.jpg'],
      alt: 'Desayuno nutritivo 8',
      placeholder: '🍌'
    },
    {
      src: '/images/breakfast-9.webp',
      fallbacks: ['/images/breakfast-9.png', '/images/breakfast-9.jpg'],
      alt: 'Desayuno nutritivo 9',
      placeholder: '🥨'
    },
    {
      src: '/images/breakfast-10.webp',
      fallbacks: ['/images/breakfast-10.png', '/images/breakfast-10.jpg'],
      alt: 'Desayuno nutritivo 10',
      placeholder: '🧈'
    }
  ]

  // Componente de imagen con fallbacks automáticos
  const RobustImage = ({ image, index, className = "", ...props }) => {
    const [currentSrc, setCurrentSrc] = useState(image.src)
    const [fallbackIndex, setFallbackIndex] = useState(0)
    const [hasError, setHasError] = useState(false)

    // Reset del estado cuando cambia la imagen
    useEffect(() => {
      setCurrentSrc(image.src)
      setFallbackIndex(0)
      setHasError(false)
    }, [image.src])

    const handleError = () => {
      // Intentar con el siguiente fallback
      if (fallbackIndex < image.fallbacks.length) {
        const nextSrc = image.fallbacks[fallbackIndex]
        setCurrentSrc(nextSrc)
        setFallbackIndex(prev => prev + 1)
      } else {
        // Ya no hay más fallbacks, mostrar placeholder
        setHasError(true)
        setImageErrors(prev => ({
          ...prev,
          [image.src]: true
        }))
      }
    }

    if (hasError || imageErrors[image.src]) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-emerald-200 via-orange-200 to-emerald-300 flex items-center justify-center">
          <span className="text-lg md:text-xl">{image.placeholder}</span>
        </div>
      )
    }

    return (
      <Image
        src={currentSrc}
        alt={image.alt}
        fill
        className={`object-cover ${className}`}
        onError={handleError}
        onLoad={() => console.log(`✅ Loaded: ${currentSrc}`)}
        {...props}
      />
    )
  }

  // Fallback completo si no está en cliente
  if (!isClient) {
    return (
      <div className="relative max-w-5xl mx-auto overflow-hidden">
        <div className="flex gap-2 animate-pulse">
          {images.slice(0, 7).map((image, index) => (
            <div key={index} className="flex-shrink-0 px-0.5" style={{ width: '14.285%' }}>
              <div className="aspect-[3/2] rounded-md bg-gradient-to-br from-emerald-200 via-orange-200 to-emerald-300 flex items-center justify-center">
                <span className="text-lg">{image.placeholder}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Crear múltiples copias para el efecto infinito
  const renderImageSet = (images, keyPrefix) => {
    return images.map((image, index) => (
      <div
        key={`${keyPrefix}-${index}`}
        className="carousel-item flex-shrink-0 px-0.5 md:w-[14.285%] w-[25%]"
      >
        <div className="relative aspect-[3/2] md:aspect-[3/2] rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5">
          <RobustImage 
            image={image} 
            index={index}
            priority={index < 7}
            loading={index < 7 ? "eager" : "lazy"}
            quality={85}
            sizes="(max-width: 768px) 25vw, 14vw"
          />
          
          {/* Overlay con información */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-1 left-1 text-white">
              <p className="text-xs font-medium md:hidden">{index + 1}</p>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="relative max-w-5xl mx-auto overflow-hidden">
      {/* Botón de debug/reset */}
      <button 
        onClick={() => {
          console.log('🔄 Resetting carousel...')
          setImageErrors({})
        }}
        className="absolute top-0 right-0 z-20 bg-green-500 hover:bg-green-600 text-white px-2 py-1 text-xs rounded-bl opacity-50 hover:opacity-100 transition-opacity"
        title="Reset carrusel"
      >
        🔄
      </button>

      {/* CSS-only Infinite Carousel */}
      <div className="carousel-container">
        <div className="carousel-track">
          {/* Primera copia */}
          {renderImageSet(images, 'set1')}
          {/* Segunda copia */}
          {renderImageSet(images, 'set2')}
          {/* Tercera copia para asegurar seamless loop */}
          {renderImageSet(images, 'set3')}
        </div>
      </div>

      {/* Status indicator */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-500 opacity-50">
        {Object.keys(imageErrors).length > 0 && (
          <span>⚠️ {Object.keys(imageErrors).length} imgs usando placeholder</span>
        )}
      </div>

      <style jsx>{`
        .carousel-container {
          width: 100%;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          gap: 0.5rem;
          width: calc(300%); /* 3 sets of images */
          animation: scroll-infinite 15s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .carousel-track {
            animation-duration: 15s;
            gap: 0.375rem;
          }
        }

        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%); /* Move one full set */
          }
        }

        /* Asegurar que los items mantengan su tamaño */
        .carousel-item {
          flex: 0 0 auto;
        }

        @media (min-width: 768px) {
          .carousel-item {
            width: 14.285%; /* 100/7 para mostrar 7 items */
          }
        }

        @media (max-width: 767px) {
          .carousel-item {
            width: 25%; /* 100/4 para mostrar 4 items en mobile */
          }
        }
      `}</style>
    </div>
  )
}

export default ImageCarousel