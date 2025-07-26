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
            <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
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
            <span className="font-semibold text-green-600"> María Aguiar</span>, 
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

        {/* CTA Button with Heartbeat Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
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
            className="relative bg-green-500 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 border-2 border-green-300/50 overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full blur-xl opacity-75"></div>
            
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