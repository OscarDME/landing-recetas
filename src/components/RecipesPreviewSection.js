import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const RecipesPreviewSection = () => {
  const [imageErrors, setImageErrors] = useState({})

  const recipes = [
    {
      id: 1,
      image: "/images/breakfast-12.webp",
      fallbacks: ["/images/breakfast-12.png", "/images/breakfast-12.jpg"],
      title: "HUEVOS AL SARTÉN",
      subtitle: "CON CARNES FRÍAS",
      time: "10 MINUTOS",
      calories: "165 KCAL/PORCIÓN",
      placeholder: "🍳",
      bgColor: "from-amber-100 to-orange-100"
    },
    {
      id: 2,
      image: "/images/breakfast-3.webp",
      fallbacks: ["/images/breakfast-3.png", "/images/breakfast-3.jpg"],
      title: "PIZZA RÁPIDA",
      subtitle: "AL SARTÉN",
      time: "8 MINUTOS",
      calories: "287 KCAL/PORCIÓN",
      placeholder: "🍕",
      bgColor: "from-red-100 to-orange-100"
    },
    {
      id: 3,
      image: "/images/breakfast-9.webp",
      fallbacks: ["/images/breakfast-9.png", "/images/breakfast-9.jpg"],
      title: "PANQUEQUE FIT",
      subtitle: "DE PLÁTANO",
      time: "5 MINUTOS",
      calories: "138 KCAL/PORCIÓN",
      placeholder: "🥞",
      bgColor: "from-yellow-100 to-amber-100"
    },
    {
      id: 4,
      image: "/images/breakfast-11.webp",
      fallbacks: ["/images/breakfast-11.png", "/images/breakfast-11.jpg"],
      title: "OMELETTE DE CARNES FRÍAS",
      subtitle: "TOSTADO",
      time: "7 MINUTOS",
      calories: "175 KCAL/PORCIÓN",
      placeholder: "🧈",
      bgColor: "from-green-100 to-yellow-100"
    },
    {
      id: 5,
      image: "/images/breakfast-2.webp",
      fallbacks: ["/images/breakfast-2.png", "/images/breakfast-2.jpg"],
      title: "SMOOTHIE BOWL",
      subtitle: "DE PROTEÍNA",
      time: "3 MINUTOS",
      calories: "220 KCAL/PORCIÓN",
      placeholder: "🍓",
      bgColor: "from-pink-100 to-purple-100"
    }
  ]

  // Componente de imagen con fallbacks para recetas
  const RobustRecipeImage = ({ recipe, className = "" }) => {
    const [currentSrc, setCurrentSrc] = useState(recipe.image)
    const [fallbackIndex, setFallbackIndex] = useState(0)
    const [hasError, setHasError] = useState(false)

    const handleError = () => {
      console.warn(`Error loading recipe image: ${currentSrc}`)
      
      // Intentar con el siguiente fallback
      if (fallbackIndex < recipe.fallbacks.length) {
        const nextSrc = recipe.fallbacks[fallbackIndex]
        setCurrentSrc(nextSrc)
        setFallbackIndex(prev => prev + 1)
      } else {
        // Ya no hay más fallbacks, mostrar placeholder
        setHasError(true)
        setImageErrors(prev => ({
          ...prev,
          [recipe.id]: true
        }))
      }
    }

    if (hasError || imageErrors[recipe.id]) {
      return (
        <div className={`w-full h-full bg-gradient-to-br ${recipe.bgColor} flex items-center justify-center ${className}`}>
          <span className="text-4xl md:text-5xl">{recipe.placeholder}</span>
        </div>
      )
    }

    return (
      <Image
        src={currentSrc}
        alt={`${recipe.title} - ${recipe.subtitle}`}
        fill
        className={`object-cover ${className}`}
        onError={handleError}
        onLoad={() => console.log(`✅ Loaded recipe image: ${currentSrc}`)}
        quality={85}
        sizes="(max-width: 768px) 100vw, 256px"
      />
    )
  }

  return (
    <section className="bg-gradient-to-br from-amber-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            VEA LO QUE USTED
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-700">
            VA A APRENDER:
          </h3>
        </div>

        {/* Recipes Grid */}
        <div className="space-y-6 mb-10">
          {recipes.map((recipe, index) => (
            <motion.div 
              key={recipe.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Container */}
                <div className="md:w-64 h-48 md:h-32 relative overflow-hidden">
                  <RobustRecipeImage recipe={recipe} />
                  
                  {/* Overlay con información adicional */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="text-xs font-medium">Receta #{recipe.id}</p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
                  <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-1">
                    {recipe.title}
                  </h4>
                  <p className="text-base md:text-lg text-slate-600 mb-3">
                    {recipe.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      ⏱️ {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      🔥 {recipe.calories}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reset button for debugging
        <div className="text-center mb-4">
          <button 
            onClick={() => {
              console.log('🔄 Resetting recipe images...')
              setImageErrors({})
            }}
            className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-600 px-3 py-1 rounded opacity-50 hover:opacity-100 transition-opacity"
            title="Reset imágenes recetas"
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
            ⚠️ {Object.keys(imageErrors).length} imágenes de recetas usando placeholder
          </div>
        )}
      </div>
    </section>
  )
}

export default RecipesPreviewSection