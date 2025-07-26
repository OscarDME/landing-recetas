'use client'

import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 py-8 md:py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-emerald-200/30 to-emerald-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-orange-200/30 to-orange-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-emerald-100/20 to-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-3"
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              200 DESAYUNOS
            </span>
            <br />
            <span className="text-gray-700">
              DE NUTRI 
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              (CON SABOR)
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Recetas de bajas calorías creadas por la nutri 
            <span className="font-semibold text-emerald-600">María Aguiar</span>, 
            con sabor delicioso de verdad.
          </motion.p>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-6"
        >
          <ImageCarousel />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-base md:text-lg px-8 py-3 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl border-2 border-emerald-500/20"
          >
            🍳 ¡QUIERO LAS RECETAS!
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-4 text-sm text-gray-500"
          >
            ✨ Acesso imediato • 📱 Para celular e computador
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [0, -6, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-12 left-6 text-2xl opacity-20"
        >
          🥞
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, -2, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute top-14 right-12 text-xl opacity-20"
        >
          🥑
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
          className="absolute bottom-12 left-12 text-xl opacity-20"
        >
          🍓
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection