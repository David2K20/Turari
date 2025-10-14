'use client'

const FragranceCollections = () => {
  const collections = [
    { name: 'For Him', description: 'Bold and refined fragrances that express strength, sophistication, and the modern gentleman\'s distinctive character.' },
    { name: 'For Her', description: 'Elegant and captivating scents that celebrate femininity, grace, and the timeless beauty of confident expression.' }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {collections.map((collection) => (
            <div key={collection.name} className="text-center">
              <h2 className="heading-luxury text-3xl md:text-4xl font-medium text-primary mb-4">
                {collection.name}
              </h2>
              <p className="font-inter text-base text-secondary leading-relaxed mb-8 max-w-md mx-auto">
                {collection.description}
              </p>
              <button className="btn-primary">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FragranceCollections