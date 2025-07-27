import { useState, useEffect } from 'react'
import Image from 'next/image'

const TestimonialsSection = () => {
  const [imageErrors, setImageErrors] = useState({})
  const [isClient, setIsClient] = useState(false)

  // Asegurar que se renderice en el cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Array de testimonios con fallbacks
  const testimonials = [
    {
      src: '/images/testimonial-1.webp',
      fallbacks: ['/images/testimonial-1.jpg', '/images/testimonial-1.jpeg'],
      alt: 'Testimonio de cliente 1',
      placeholder: '💬'
    },
    {
      src: '/images/testimonial-4.webp',
      fallbacks: ['/images/testimonial-2.jpg', '/images/testimonial-2.jpeg'],
      alt: 'Testimonio de cliente 2',
      placeholder: '⭐'
    },
    {
      src: '/images/testimonial-3.webp',
      fallbacks: ['/images/testimonial-3.jpg', '/images/testimonial-3.jpeg'],
      alt: 'Testimonio de cliente 3',
      placeholder: '👥'
    },
  ]

  // Componente de imagen con fallbacks automáticos
  const RobustTestimonialImage = ({ testimonial, index, className = "", ...props }) => {
    const [currentSrc, setCurrentSrc] = useState(testimonial.src)
    const [fallbackIndex, setFallbackIndex] = useState(0)
    const [hasError, setHasError] = useState(false)

    // Reset del estado cuando cambia la imagen
    useEffect(() => {
      setCurrentSrc(testimonial.src)
      setFallbackIndex(0)
      setHasError(false)
    }, [testimonial.src])

    const handleError = () => {
      // Intentar con el siguiente fallback
      if (fallbackIndex < testimonial.fallbacks.length) {
        const nextSrc = testimonial.fallbacks[fallbackIndex]
        setCurrentSrc(nextSrc)
        setFallbackIndex(prev => prev + 1)
      } else {
        // Ya no hay más fallbacks, mostrar placeholder
        setHasError(true)
        setImageErrors(prev => ({
          ...prev,
          [testimonial.src]: true
        }))
      }
    }

    if (hasError || imageErrors[testimonial.src]) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-green-100 via-green-200 to-green-300 flex items-center justify-center">
          <div className="text-center text-green-700">
            <span className="text-3xl mb-1 block">{testimonial.placeholder}</span>
            <p className="text-xs font-medium">#{index + 1}</p>
          </div>
        </div>
      )
    }

    return (
      <Image
        src={currentSrc}
        alt={testimonial.alt}
        fill
        className={`object-contain ${className}`}
        onError={handleError}
        onLoad={() => console.log(`✅ Loaded testimonial: ${currentSrc}`)}
        quality={85}
        sizes="(max-width: 768px) 33vw, 16vw"
        {...props}
      />
    )
  }

  // Fallback completo si no está en cliente
  if (!isClient) {
    return (
      <section className="bg-green-600 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              VEA LO QUE DICEN
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              QUIENES ADQUIRIERON:
            </h3>
          </div>
          <div className="flex gap-4 animate-pulse">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-1/3">
                <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-green-100 via-green-200 to-green-300 flex items-center justify-center">
                  <span className="text-4xl">{testimonial.placeholder}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Crear múltiples copias para el efecto infinito
  const renderTestimonialSet = (testimonials, keyPrefix) => {
    return testimonials.map((testimonial, index) => (
      <div
        key={`${keyPrefix}-${index}`}
        className="carousel-testimonial flex-shrink-0 px-1 md:w-[16.666%] w-[33.333%]"
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05]">
          <div className="relative aspect-square">
            <RobustTestimonialImage 
              testimonial={testimonial} 
              index={index}
              priority={index < 4}
              loading={index < 4 ? "eager" : "lazy"}
            />
          </div>
        </div>
      </div>
    ))
  }

  return (
    <section className="bg-green-600 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            VEA LO QUE DICEN
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            QUIENES ADQUIRIERON:
          </h3>
        </div>

        {/* Botón de debug/reset */}
        {/* <button 
          onClick={() => {
            console.log('🔄 Resetting testimonials carousel...')
            setImageErrors({})
          }}
          className="absolute top-4 right-4 z-20 bg-green-700 hover:bg-green-800 text-white px-2 py-1 text-xs rounded opacity-50 hover:opacity-100 transition-opacity"
          title="Reset carrusel testimonios"
        >
          🔄
        </button> */}

        {/* CSS-only Infinite Carousel */}
        <div className="testimonial-carousel-container relative overflow-hidden">
          <div className="testimonial-carousel-track">
            {/* Primera copia */}
            {renderTestimonialSet(testimonials, 'set1')}
            {/* Segunda copia */}
            {renderTestimonialSet(testimonials, 'set2')}
            {/* Tercera copia para asegurar seamless loop */}
            {renderTestimonialSet(testimonials, 'set3')}
          </div>
        </div>

        {/* Status indicator */}
        {Object.keys(imageErrors).length > 0 && (
          <div className="text-center mt-4 text-xs text-green-100 opacity-50">
            ⚠️ {Object.keys(imageErrors).length} testimonios usando placeholder
          </div>
        )}
      </div>

      <style jsx>{`
        .testimonial-carousel-container {
          width: 100%;
          overflow: hidden;
        }

        .testimonial-carousel-track {
          display: flex;
          gap: 1rem;
          width: calc(300%); /* 3 sets of testimonials */
          animation: scroll-testimonials 15s linear infinite;
        }

        .testimonial-carousel-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .testimonial-carousel-track {
            animation-duration: 15s;
            gap: 0.5rem;
          }
        }

        @keyframes scroll-testimonials {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%); /* Move one full set */
          }
        }

        /* Asegurar que los items mantengan su tamaño */
        .carousel-testimonial {
          flex: 0 0 auto;
        }

        @media (min-width: 768px) {
          .carousel-testimonial {
            width: 16.666%; /* 100/6 para mostrar 6 items en desktop */
          }
        }

        @media (max-width: 767px) {
          .carousel-testimonial {
            width: 33.333%; /* 100/3 para mostrar 3 items en mobile */
          }
        }
      `}</style>
    </section>
  )
}

export default TestimonialsSection