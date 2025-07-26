const FinalCTASection = () => {
  return (
    <section className="bg-emerald-700 py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-lg">
        {/* Card Container */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-2xl">
          {/* Product Image */}
          <div className="text-center mb-6">
            <div className="inline-block">
              <img 
                src="/images/product-mockup.png"
                alt="200 Desayunos de Nutri - App en dispositivos móviles"
                className="w-64 h-auto mx-auto"
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">
              200 DESAYUNOS
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">
              DE NUTRI (CON SABOR)®
            </h3>
          </div>

          {/* Features */}
          <div className="text-center mb-6 space-y-2">
            <p className="text-slate-700 font-medium">
              + POSTRES SIN AZÚCAR
            </p>
            <p className="text-slate-700 font-medium">
              + PANES SIN GLUTEN
            </p>
            <p className="text-slate-700 font-medium">
              + ENSALADAS Y SALSAS
            </p>
          </div>

          {/* Pricing */}
          <div className="text-center mb-6">
            <p className="text-slate-600 text-lg line-through mb-2">
              De $32.35 ...
            </p>
            <p className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
              por 5x de
            </p>
            <p className="text-4xl md:text-5xl font-bold text-emerald-600 mb-3">
              $5.39
            </p>
            <p className="text-slate-600 text-lg">
              O $26.95 A LA VISTA
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-4">
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xl py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              COMPRAR AHORA!
            </button>
          </div>

          {/* Urgency Text */}
          <div className="text-center">
            <p className="text-red-600 font-bold text-sm">
              **OFERTA EXPIRA HOY**
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection