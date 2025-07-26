const RecipesPreviewSection = () => {
  const recipes = [
    {
      id: 1,
      image: "/images/recipe-cafe-frigideira.jpg",
      title: "CAFÉ DE FRIGIDEIRA",
      subtitle: "COM OVOS E FRIOS",
      time: "10 MINUTOS",
      calories: "165 KCAL/DOSE",
      placeholder: "🍳",
      bgColor: "from-amber-100 to-orange-100"
    },
    {
      id: 2,
      image: "/images/recipe-pizza-rapida.jpg",
      title: "PIZZA RÁPIDA",
      subtitle: "DE FRIGIDEIRA",
      time: "8 MINUTOS",
      calories: "287 KCAL/DOSE",
      placeholder: "🍕",
      bgColor: "from-red-100 to-orange-100"
    },
    {
      id: 3,
      image: "/images/recipe-panqueca-fit.jpg",
      title: "PANQUECA FIT",
      subtitle: "DE BANANA",
      time: "5 MINUTOS",
      calories: "138 KCAL/DOSE",
      placeholder: "🥞",
      bgColor: "from-yellow-100 to-amber-100"
    },
    {
      id: 4,
      image: "/images/recipe-omelete-frios.jpg",
      title: "OMELETE DE FRIOS",
      subtitle: "TOSTADA",
      time: "7 MINUTOS",
      calories: "175 KCAL/DOSE",
      placeholder: "🧈",
      bgColor: "from-green-100 to-yellow-100"
    },
    {
      id: 5,
      image: "/images/recipe-smoothie-bowl.jpg",
      title: "SMOOTHIE BOWL",
      subtitle: "PROTEICO",
      time: "3 MINUTOS",
      calories: "220 KCAL/DOSE",
      placeholder: "🍓",
      bgColor: "from-pink-100 to-purple-100"
    }
  ]

  return (
    <section className="bg-gradient-to-br from-amber-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            VEA LO QUE USTED
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-700">
            VA A APRENDER:
          </h3>
        </div>

        {/* Recipes Grid */}
        <div className="space-y-6 mb-10">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-64 h-48 md:h-32 bg-gradient-to-br relative overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${recipe.bgColor} flex items-center justify-center`}>
                    <span className="text-4xl md:text-5xl">{recipe.placeholder}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
                  <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-1">
                    {recipe.title}
                  </h4>
                  <p className="text-base md:text-lg text-slate-600 mb-3">
                    {recipe.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      ⏱️ {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      🔥 {recipe.calories}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base md:text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
            ¡QUIERO LAS RECETAS!
          </button>
        </div>
      </div>
    </section>
  )
}

export default RecipesPreviewSection