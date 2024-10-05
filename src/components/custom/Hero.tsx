import React from 'react'
import CtaBtn from './CtaBtn'

const Hero: React.FC = () => {
  return (
    <section className='min-h-screen bg-primary/10'>
      <div className="container text-center flex flex-col items-center gap-6 py-20">
        {/* Titre principale */}
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
          Mon titre ici
        </h1>
        {/* Phrase d'accroche */}
        <p className="max-w-screen-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non ut qui dolor rem repellat tempore fugiat. Rerum, assumenda aliquid molestiae repudiandae tempore est laudantium sunt explicabo sed illo asperiores!
        </p>
        {/* CTA buttons */}
        <div className="flex gap-4 items-center">
          <CtaBtn name="Parcourir les Blogs" />
        </div>
      </div>
    </section>
  )
}

export default Hero