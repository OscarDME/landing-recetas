import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "✅",
      text: "Recetas con menos de 350 calorías",
    },
    {
      icon: "😋",
      text: "Con sabores realmente deliciosos",
    },
    {
      icon: "🥄",
      text: "Ricas en proteínas y vitaminas esenciales",
    },
    {
      icon: "⏰",
      text: "Listas en solo 15 minutos",
    },
    {
      icon: "🛒",
      text: "Hechas con ingredientes fáciles de conseguir",
    },
    {
      icon: "🍴",
      text: "Solo necesitás licuadora y refrigerador",
    },
    {
      icon: "📋",
      text: "Paso a paso detallado y fácil de seguir",
    },
  ];

  return (
    <section className="bg-green-600 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            LO QUE USTED
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-green-100">
            VA A ENCONTRAR:
          </h3>
        </div>

        {/* Features List */}
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-white bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/15 transition-colors duration-200"
            >
              <span className="text-xl md:text-2xl flex-shrink-0 bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                {feature.icon}
              </span>
              <p className="text-base md:text-lg font-medium text-white">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              scale: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            onClick={() => {
              const finalCTASection =
                document.querySelector('[data-section="final-cta"]') ||
                document.getElementById("final-cta-section");
              if (finalCTASection) {
                finalCTASection.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              } else {
                console.warn("Final CTA section not found");
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
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
