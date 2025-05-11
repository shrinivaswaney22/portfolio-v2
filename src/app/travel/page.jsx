import Haridwar from '@/sections/travel/Haridwar'
import Kedarkantha from '@/sections/travel/Kedarkantha'
import NainitalMussoorie from '@/sections/travel/NainitalMussoorie'
import Rishikesh from '@/sections/travel/Rishikesh'
import Summary from '@/sections/travel/Summary'
import React from 'react'

const page = () => {
  return (
    <section id='about' className='section-padding flex-col-center'>
      <Summary />
      <div className="mt-16 text-center max-w-4xl text-white-50 space-y-4">
          <h3 className="text-2xl font-semibold text-white">🌍 My Travel Philosophy</h3>
          <p>
            I travel not to escape life — but for life not to escape me.  
            Every trip is a reset button: new perspectives, faces, ideas.
            Travel inspires my creativity, shapes my mindset, and adds soul to my code.
          </p>
        </div>
      <Kedarkantha />
      <Haridwar />
      <NainitalMussoorie />
      <Rishikesh />
    </section>
  )
}

export default page