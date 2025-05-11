import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { k_items } from '@/data'
import React from 'react'

const Kedarkantha = () => {
  return (
    <div id='kedarkantha' className="mt-16 text-center max-w-4xl text-white-50 space-y-4">
        <h3 className="text-2xl font-semibold text-white">🏔️ Kedarkantha Trek</h3>
        <p>
            The Kedarkantha trek is a mesmerizing journey through the Himalayas, 
            offering breathtaking views and a chance to connect with nature. 
            The trek takes you through lush forests, charming villages, and snow-capped peaks, 
            making it a perfect adventure for nature lovers and trekkers alike.
        </p>
        <p>
            The trek is known for its stunning panoramic views of the surrounding mountains, 
            including the majestic Swargarohini and Bandarpoonch peaks. 
            The experience of camping under a starry sky and waking up to the sound of chirping birds is truly magical.
        </p>
        <p>
            The Kedarkantha trek is not just about the destination; 
            it's about the journey, the camaraderie with fellow trekkers, and the memories created along the way. 
            It's a reminder of the beauty of nature and the joy of exploration.
        </p>
        <InfiniteMovingCards items={k_items}/>
    </div>
  )
}

export default Kedarkantha