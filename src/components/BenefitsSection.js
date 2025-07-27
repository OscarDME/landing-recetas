import { motion } from 'framer-motion'

const BenefitsSection = () => {
  const benefits = [
    "Menú creado por una nutricionista",
    "Más de 200 opciones saludables",
    "Bajísimas en calorías",
    "Sabor nuevo todos los días sin aburrir",
    "Hechas en menos de 15 minutos",
    "No necesita utensilios profesionales",
    "Nutrición completa para comenzar el día"
  ]

  return (
    <section className="bg-gradient-to-br from-amber-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-left mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
            VEA LAS VENTAJAS
          </h2>
        </div>

        {/* Benefits List */}
        <div className="space-y-4 mb-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <p className="text-base md:text-lg text-slate-700 font-medium">
                {benefit}
              </p>
            </div>
          ))}
        </div>

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
      </div>
    </section>
  )
}

export default BenefitsSection