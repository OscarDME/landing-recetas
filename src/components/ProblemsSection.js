const ProblemsSection = () => {
  const problems = [
    "Falta de opciones saludables de café de la mañana",
    "Dificultad para perder peso y alimentarse bien",
    "Falta de recetas sabrosas que nutran",
    "Falta de recetas rápidas para el café de la mañana",
    "Falta de nutrientes necesarios para el día"
  ]

  return (
    <section className="bg-emerald-700 py-8 md:py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12">
          {/* Title */}
          <div className="lg:w-2/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center lg:text-left leading-tight">
              PARA PERSONAS<br />
              QUE ENFRENTAN:
            </h2>
          </div>

          {/* Problems List */}
          <div className="lg:w-3/5 space-y-3">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 text-white"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-sm font-bold">✕</span>
                </div>
                <p className="text-base md:text-lg text-emerald-50">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection