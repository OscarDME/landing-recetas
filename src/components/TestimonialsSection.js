const TestimonialsSection = () => {
  return (
    <section className="bg-emerald-700 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            VEA LO QUE DICEN
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            QUIENES ADQUIRIERON:
          </h3>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Screenshot 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[3/4]">
              <img 
                src="/images/testimonial-1.png"
                alt="Testimonio de cliente 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Screenshot 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[3/4]">
              <img 
                src="/images/testimonial-2.png"
                alt="Testimonio de cliente 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Screenshot 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[3/4]">
              <img 
                src="/images/testimonial-3.png"
                alt="Testimonio de cliente 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection