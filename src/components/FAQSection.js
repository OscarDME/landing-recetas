import { useState } from 'react'
import { motion } from 'framer-motion'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "¿Cómo recibo el material?",
      answer: "Así que usted coloque sus datos y finalice su compra, vamos a enviar un e-mail con todas las recetas. Por eso es importante inserir el e-mail y número correcto en la hora de finalizar la compra."
    },
    {
      question: "¿Las recetas tienen mismo sabor de verdad?",
      answer: "¡Sí! O maior foco da nutri María Aguiar foi unir saúde com sabor de verdade. Nada de comida sem gosto... São receitas realmente gostosas, testadas e aprovadas."
    },
    {
      question: "¿Son recetas saludables?",
      answer: "Todas são saudáveis, equilibradas e pensadas para oferecer os nutrientes e vitaminas que seu corpo precisa para começar bem o dia."
    },
    {
      question: "¿Las recetas sirven para toda la familia?",
      answer: "Com certeza! São ideias que agradam adultos e crianças, com ingredientes acessíveis e muito sabor."
    },
    {
      question: "¿Las recetas son fáciles de hacer?",
      answer: "Sim! A maioria das receitas é simples, com ingredientes acessíveis e instruções claras, perfeitas para o dia a dia corrido."
    },
    {
      question: "¿Necesito saber cocinar para aprovechar?",
      answer: "Não! As receitas foram pensadas para todos os níveis de habilidade na cozinha — inclusive iniciantes."
    },
    {
      question: "¿Tienen lista de ingredientes accesibles?",
      answer: "Sim. A nutri priorizou ingredientes que você encontra com facilidade em mercados comuns, sem precisar de produtos caros ou raros."
    },
    {
      question: "¿Voy a necesitar batidora o utensilios especiales?",
      answer: "Não! As receitas foram pensadas para o dia a dia, usando utensílios simples que você já tem em casa, como colher, garfo, liquidificador e frigideira."
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

export default FAQSection