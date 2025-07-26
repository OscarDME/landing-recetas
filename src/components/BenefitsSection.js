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
              <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
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
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
            ¡QUIERO LAS RECETAS!
          </button>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection