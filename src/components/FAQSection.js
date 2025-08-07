import { useState } from 'react'
import { motion } from 'framer-motion'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "¿Cómo recibo el material?",
      answer: "Una vez que completes tu compra, recibirás un correo electrónico con acceso inmediato a todas las recetas. Asegúrate de ingresar correctamente tu correo y número al finalizar la compra."
    },
    {
      question: "¿Las recetas realmente tienen buen sabor?",
      answer: "¡Sí! La nutricionista Laura Gómez creó cada receta con el objetivo de unir salud y sabor real. Nada de comidas insípidas: son recetas deliciosas, probadas y aprobadas."
    },
    {
      question: "¿Son recetas saludables?",
      answer: "Sí. Todas las recetas fueron desarrolladas para ser equilibradas y ofrecer los nutrientes, vitaminas y energía que tu cuerpo necesita para empezar el día."
    },
    {
      question: "¿Las recetas sirven para toda la familia?",
      answer: "Totalmente. Son opciones que gustan tanto a adultos como a niños, con ingredientes simples y sabor garantizado."
    },
    {
      question: "¿Las recetas son fáciles de preparar?",
      answer: "Sí. La mayoría se prepara en menos de 15 minutos, con pasos sencillos e ingredientes accesibles. ¡Perfectas para el día a día!"
    },
    {
      question: "¿Necesito saber cocinar para aprovecharlas?",
      answer: "No hace falta. Las recetas están pensadas para todos los niveles, incluso si nunca cocinaste antes. ¡Son súper amigables!"
    },
    {
      question: "¿Usan ingredientes fáciles de conseguir?",
      answer: "Sí. Todas las recetas fueron creadas con ingredientes comunes que podés encontrar en cualquier supermercado."
    },
    {
      question: "¿Necesito batidora o utensilios especiales?",
      answer: "Para nada. Solo necesitarás lo básico: una licuadora, sartén y utensilios comunes de cocina. Nada complicado ni profesional."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-slate-400"></div>
            <h2 className="px-6 text-2xl md:text-3xl font-bold text-slate-700">
              DUDAS FRECUENTES
            </h2>
            <div className="flex-1 h-px bg-slate-400"></div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
            >
              {/* Question */}
              <div 
                className="p-4 cursor-pointer hover:bg-slate-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base md:text-lg font-medium text-slate-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                    <span 
                      className={`text-white text-sm transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Answer */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-4 border-t border-slate-100">
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
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
            <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 via-green-400/20 to-green-500/20 rounded-full blur-xl opacity-75"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              🍳 ¡QUIERO LAS RECETAS!
            </span>
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

export default FAQSection
