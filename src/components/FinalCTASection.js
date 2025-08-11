"use client";

import { useState } from "react";
import Image from "next/image";

const FinalCTASection = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.warn("Error loading product mockup image, showing placeholder");
    setImageError(true);
  };

  const handleBuyClick = (e) => {
    e.preventDefault();
    // Solo abrir el checkout de Hotmart, sin pixel aquí
    window.open(
      "https://pay.hotmart.com/H101227785A?checkoutMode=10",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="bg-green-600 py-16 md:py-20"
      data-section="final-cta"
      id="final-cta-section"
    >
      <div className="container mx-auto px-4 max-w-lg">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-2xl">
          
          {/* Imagen del producto */}
          <div className="text-center mb-6">
            <div className="inline-block">
              {imageError ? (
                <div className="w-64 h-80 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center text-green-700">
                    <div className="text-6xl mb-4">📱</div>
                    <div className="text-4xl mb-2">🍳📖</div>
                    <p className="text-sm font-medium">Recetario de Desayunos</p>
                  </div>
                </div>
              ) : (
                <Image
                  src="/images/product-mockup2.webp"
                  alt="200 Desayunos de Nutri - App en dispositivos móviles"
                  width={356}
                  height={420}
                  className="mx-auto"
                  onError={handleImageError}
                  quality={90}
                />
              )}
            </div>
          </div>

          {/* Título */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
              200 DESAYUNOS SALUDABLES (Y DELICIOSOS)®
            </h2>
          </div>

          {/* Características */}
          <div className="text-center mb-6 space-y-2">
            <p className="text-slate-700 font-medium">+ COMIDAS COMPLETAS FIT</p>
            <p className="text-slate-700 font-medium">+ POSTRES SIN AZÚCAR</p>
            <p className="text-slate-700 font-medium">+ JUGOS DETOX</p>
          </div>

          {/* Precio */}
          <div className="text-center mb-6">
            <p className="text-slate-600 text-lg line-through mb-2">
              De $24.99 USD
            </p>
            <p className="text-4xl md:text-5xl font-bold text-green-600 mb-3">
              por sólo $5.47 USD
            </p>
          </div>

          {/* Botón CTA */}
          <div className="text-center mb-4">
            <a
              href="https://pay.hotmart.com/H101227785A?checkoutMode=10"
              onClick={handleBuyClick}
              className="block w-full text-center bg-green-500 hover:bg-green-700 text-white font-bold text-xl py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              ¡COMPRAR AHORA!
            </a>
          </div>

          {/* Urgencia */}
          <div className="text-center">
            <p className="text-red-600 font-bold text-sm">
              <strong>LA OFERTA TERMINA HOY</strong>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
