import { useState } from 'react'
import Image from 'next/image'

const GuaranteeSection = () => {
  const [imageError, setImageError] = useState(false)

  const badges = [
    {
      icon: "🔒",
      text: "Compra 100% segura"
    },
    {
      icon: "🛡️",
      text: "7 días de garantía"
    },
    {
      icon: "$",
      text: "Reembolso garantido"
    },
    {
      icon: "⭐",
      text: "Calidad garantizada"
    }
  ]

  const handleImageError = () => {
    console.warn('Error loading guarantee image, showing placeholder')
    setImageError(true)
  }

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Guarantee Image */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative w-64 h-64">
              {imageError ? (
                // Placeholder si la imagen no carga
                <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex flex-col items-center justify-center relative shadow-lg">
                  {/* Star decorations */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-lg">
                    ⭐ RIESGO ⭐
                  </div>
                  
                  {/* Zero text */}
                  <div className="text-white text-6xl font-bold mb-2">
                    ZERO
                  </div>
                  
                  {/* Ribbon */}
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-6 py-2 rounded-full text-sm font-bold">
                    GARANTÍA DE 7 DÍAS
                  </div>
                  
                  {/* Decorative ribbons */}
                  <div className="absolute -bottom-4 -left-4 w-16 h-8 bg-slate-600 transform rotate-12 rounded"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-8 bg-slate-600 transform -rotate-12 rounded"></div>
                </div>
              ) : (
                // Imagen real de garantía
                <Image
                  src="/images/garantia.png"
                  alt="Garantía de 7 días - Riesgo Zero"
                  fill
                  className="object-contain"
                  onError={handleImageError}
                  onLoad={() => console.log('✅ Loaded guarantee image')}
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-2">
              SATISFACCIÓN GARANTIZADA
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              ¡Y RIESGO ZERO!
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              Si usted adquiere este producto y por algún motivo no se 
              siente satisfecho, por un plazo de hasta 7 días, devolvemos 
              su dinero.
            </p>

            {/* Guarantee Badges */}
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-white/60 rounded-full px-4 py-3 shadow-sm hover:bg-white/80 transition-colors duration-200"
                >
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-sm md:text-base font-medium text-slate-700">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reset button for debugging */}
        <div className="text-center mt-8">
          <button 
            onClick={() => {
              console.log('🔄 Resetting guarantee image...')
              setImageError(false)
            }}
            className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-600 px-3 py-1 rounded opacity-50 hover:opacity-100 transition-opacity"
            title="Reset imagen garantía"
          >
            🔄 Reset Imagen
          </button>
        </div>

        {/* Status indicator */}
        {imageError && (
          <div className="text-center mt-2 text-xs text-gray-500 opacity-50">
            ⚠️ Imagen de garantía usando placeholder
          </div>
        )}
      </div>
    </section>
  )
}

export default GuaranteeSection