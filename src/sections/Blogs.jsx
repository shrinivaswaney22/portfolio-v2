import { MovingCards } from '@/components/ui/moving-cards'
import { blogs } from '@/data'
import React from 'react'

const Blogs = () => {
  return (
    <section id="blogs" className="flex-col-center section-padding">
      <div className="w-full flex-col-center gap-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-8">
          My Blogs & Experiences
        </h2>

        {/* Blog Cards */}
        <MovingCards items={blogs}/>
      </div>
    </section>
  )
}

export default Blogs