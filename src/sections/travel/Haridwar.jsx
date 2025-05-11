import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { h_items } from '@/data'
import React from 'react'

const Haridwar = () => {
  return (
    <div id='haridwar' className="mt-16 text-center max-w-4xl text-white-50 space-y-4">
        <h3 className="text-2xl font-semibold text-white">🏞️ Haridwar</h3>
        <p>
            Haridwar, a sacred city in Uttarakhand, India, is a spiritual haven where the Ganges River flows with divine grace. 
            Known for its ghats, temples, and the mesmerizing Ganga Aarti, it attracts pilgrims and tourists alike. 
            The city's rich cultural heritage and serene ambiance make it a perfect destination for spiritual seekers and nature lovers.
        </p>
        <p>
            The evening Ganga Aarti at Har Ki Pauri is a breathtaking spectacle, with thousands of diyas (lamps) floating on the river. 
            The sound of chanting mantras and the sight of flickering lights create an ethereal atmosphere. 
            Visitors can also explore ancient temples like Mansa Devi and Chandi Devi, which offer panoramic views of the city.
        </p>
        <InfiniteMovingCards items={h_items} />
    </div>
  )
}

export default Haridwar