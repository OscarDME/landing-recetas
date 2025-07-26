const FeaturesSection = () => {
  const features = [
    {
      icon: "✅",
      text: "Recetas de hasta 350 calorías"
    },
    {
      icon: "😋",
      text: "Con sabores deliciosos de verdad"
    },
    {
      icon: "🥄",
      text: "Con proteínas y vitaminas esenciales"
    },
    {
      icon: "⏰",
      text: "Listas en 15 minutos"
    },
    {
      icon: "🛒",
      text: "Con ingredientes comunes"
    },
    {
      icon: "🍴",
      text: "Use apenas liquidificador e geladeira"
    },
    {
      icon: "📋",
      text: "Paso a paso de preparo"
    }
  ]

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
          <button className="bg-white text-green-600 font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-green-50 transition-all duration-300">
            🍳 ¡QUIERO LAS RECETAS!
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection