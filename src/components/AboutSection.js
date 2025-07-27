import { useState } from 'react'
import Image from 'next/image'

const AboutSection = () => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    console.warn('Error loading María Aguiar image, showing placeholder')
    setImageError(true)
  }

  return (
    <section className="bg-green-600 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              {imageError ? (
                // Placeholder si la imagen no carga
                <div className="w-full h-full bg-gradient-to-br from-orange-200 via-amber-100 to-orange-300 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-400/20 to-transparent"></div>
                  <div className="text-center text-slate-600">
                    <div className="text-6xl mb-2">👩‍🍳</div>
                    <div className="text-4xl">🥗🍅🥑</div>
                    <p className="text-sm mt-2 font-medium">María Aguiar en la cocina</p>
                  </div>
                </div>
              ) : (
                // Imagen real de María Aguiar
                <Image
                  src="/images/nutricionista.webp" // o .jpg/.png según tengas
                  alt="María Aguiar - Nutricionista especializada en alimentación funcional"
                  fill
                  className="object-cover object-center"
                  onError={handleImageError}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx4f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyOpGoF14sRoBR3lHhKxSwqohgfMkBhh3LEoOSPvHy5WUGy1dBHM2OQZRGFk1ltYwayeXuJ0YnbFKw2cJlpKHHpOV3AvLBu1U8h38CcjERPNlgDJVOzYDNqYP5Aj6lMHUt6gcfGwA/rjNsU3qvDPxE5qvsJxSg1bY3f/9k="
                />
              )}
              
              {/* Overlay sutil para mejorar legibilidad del texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              MENÚ CREADO
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6">
              POR LA NUTRIÓLOGA<br />
              MARÍA AGUIAR
            </h3>
            
            <div className="text-green-50 space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                <strong className="text-orange-300">María Aguiar</strong>, nutricionista especializada en alimentación funcional, 
                creó más de <strong className="text-white">200 recetas de café da manhã saudáveis</strong>, 
                deliciosas de verdade y que quedan listas en hasta <strong className="text-white">15 minutos</strong>.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                Cada receta fue pensada para ofrecer todos los nutrientes que su cuerpo precisa 
                logo en el inicio del día, con el <strong className="text-orange-300">sabor y la practicidad</strong> que 
                usted necesita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection