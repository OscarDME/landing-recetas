import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const BonusSection = () => {
  const [imageErrors, setImageErrors] = useState({})

  const bonuses = [
    {
      id: 1,
      image: "/images/bonus-sobremesas.webp",
      fallbacks: ["/images/bonus-sobremesas.png", "/images/bonus-sobremesas.jpg"],
      title: "BONO 1:",
      subtitle: "200 POSTRES",
      subtitle2: "SIN AZÚCAR",
      originalPrice: "R$29,00",
      placeholder: "🍰",
      bgColor: "from-red-200 via-pink-200 to-red-300"
    },
    {
      id: 2,
      image: "/images/bonus-marmitas.webp",
      fallbacks: ["/images/bonus-marmitas.png", "/images/bonus-marmitas.jpg"],
      title: "BONO 2:",
      subtitle: "VIANDAS FIT",
      subtitle2: "P/ CONGELAR",
      originalPrice: "R$15,00",
      placeholder: "🍱",
      bgColor: "from-orange-200 via-yellow-200 to-orange-300"
    },
    {
      id: 3,
      image: "/images/bonus-detox.webp",
      fallbacks: ["/images/bonus-detox.png", "/images/bonus-detox.jpg"],
      title: "BONO 3:",
      subtitle: "10 JUGOS DETOX",
      subtitle2: "",
      originalPrice: "R$29,00",
      placeholder: "🥤",
      bgColor: "from-green-200 via-emerald-200 to-green-300"
    }
  ]

  // Componente de imagen con fallbacks
  const RobustBonusImage = ({ bonus, className = "" }) => {
    const [currentSrc, setCurrentSrc] = useState(bonus.image)
    const [fallbackIndex, setFallbackIndex] = useState(0)
    const [hasError, setHasError] = useState(false)

    const handleError = () => {
      console.warn(`Error loading bonus image: ${currentSrc}`)
      
      // Intentar con el siguiente fallback
      if (fallbackIndex < bonus.fallbacks.length) {
        const nextSrc = bonus.fallbacks[fallbackIndex]
        setCurrentSrc(nextSrc)
        setFallbackIndex(prev => prev + 1)
      } else {
        // Ya no hay más fallbacks, mostrar placeholder
        setHasError(true)
        setImageErrors(prev => ({
          ...prev,
          [bonus.id]: true
        }))
      }
    }

    if (hasError || imageErrors[bonus.id]) {
      return (
        <div className={`w-full h-full bg-gradient-to-br ${bonus.bgColor} flex items-center justify-center ${className}`}>
          <span className="text-6xl md:text-7xl">{bonus.placeholder}</span>
        </div>
      )
    }

    return (
      <Image
        src={currentSrc}
        alt={`${bonus.title} ${bonus.subtitle}`}
        fill
        className={`object-cover ${className}`}
        onError={handleError}
        onLoad={() => console.log(`✅ Loaded bonus image: ${currentSrc}`)}
        quality={85}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    )
  }

  return (
    <section className="bg-gradient-to-br from-amber-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-2">
            RECIBA ADEMÁS
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
            + 3 BONUS EXCLUSIVOS:
          </h3>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {bonuses.map((bonus) => (
            <motion.div 
              key={bonus.id}
              className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <RobustBonusImage bonus={bonus} />
                
                {/* Overlay con efecto hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 text-white">
                    {/* <p className="text-xs font-medium">Bonus {bonus.id}</p> */}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 text-center">
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                  {bonus.title}
                </h4>
                <h5 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {bonus.subtitle}
                </h5>
                {bonus.subtitle2 && (
                  <h6 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {bonus.subtitle2}
                  </h6>
                )}
                
                <div className="text-center mt-4">
                  <p className="text-white text-lg line-through mb-1">
                    {bonus.originalPrice}
                  </p>
                  <p className="text-white text-xl">
                    HOY ES <span className="text-red-600 font-bold text-2xl">¡GRATIS!</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reset button for debugging
        <div className="text-center mb-4">
          <button 
            onClick={() => {
              console.log('🔄 Resetting bonus images...')
              setImageErrors({})
            }}
            className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-600 px-3 py-1 rounded opacity-50 hover:opacity-100 transition-opacity"
            title="Reset imágenes bonus"
          >
            🔄 Reset Imágenes
          </button>
        </div> */}

        {/* CTA Button */}
        <div className="text-center">
                    <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              scale: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            onClick={() => {
              const finalCTASection = document.querySelector('[data-section="final-cta"]') || document.getElementById('final-cta-section')
              if (finalCTASection) {
                finalCTASection.scrollIntoView({ behavior: 'smooth', block: 'center' })
              } else {
                console.warn('Final CTA section not found')
              }
            }}
            className="relative bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 border-2 border-green-300/50 overflow-hidden cursor-pointer"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 via-green-400/20 to-green-500/20 rounded-full blur-xl opacity-75"></div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              🍳 ¡QUIERO LAS RECETAS!
            </span>
            
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </div>

        {/* Status indicator */}
        {Object.keys(imageErrors).length > 0 && (
          <div className="text-center mt-4 text-xs text-gray-500 opacity-50">
            ⚠️ {Object.keys(imageErrors).length} imágenes bonus usando placeholder
          </div>
        )}
      </div>
    </section>
  )
}

export default BonusSection