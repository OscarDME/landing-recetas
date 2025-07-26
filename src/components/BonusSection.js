const BonusSection = () => {
  const bonuses = [
    {
      id: 1,
      image: "/images/bonus-sobremesas.jpg",
      title: "BONO 1:",
      subtitle: "200 POSTRES",
      subtitle2: "SIN AZÚCAR",
      originalPrice: "R$29,00",
      placeholder: "🍰",
      bgColor: "from-red-200 via-pink-200 to-red-300"
    },
    {
      id: 2,
      image: "/images/bonus-marmitas.jpg",
      title: "BONO 2:",
      subtitle: "VIANDAS FIT",
      subtitle2: "P/ CONGELAR",
      originalPrice: "R$15,00",
      placeholder: "🍱",
      bgColor: "from-orange-200 via-yellow-200 to-orange-300"
    },
    {
      id: 3,
      image: "/images/bonus-detox.jpg",
      title: "BONO 3:",
      subtitle: "10 JUGOS DETOX",
      subtitle2: "",
      originalPrice: "R$29,00",
      placeholder: "🥤",
      bgColor: "from-green-200 via-emerald-200 to-green-300"
    }
  ]

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
            <div 
              key={bonus.id}
              className="bg-slate-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative">
                <div className={`w-full h-full bg-gradient-to-br ${bonus.bgColor} flex items-center justify-center`}>
                  <span className="text-6xl md:text-7xl">{bonus.placeholder}</span>
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
                    HOY ES <span className="text-emerald-400 font-bold text-2xl">¡GRATIS!</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200">
            ¡QUIERO LAS RECETAS!
          </button>
        </div>
      </div>
    </section>
  )
}

export default BonusSection