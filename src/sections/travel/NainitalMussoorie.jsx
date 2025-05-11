import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { nm_items } from '@/data';
import React from 'react';

const NainitalMussoorie = () => {
  return (
    <div id='nainital-mussoorie' className="mt-16 text-center max-w-4xl text-white-50 space-y-4">
        <h3 className="text-2xl font-semibold text-white">🏞️ Nainital & Mussoorie</h3>
        <p>
            Nainital and Mussoorie, nestled in the Kumaon and Garhwal hills of Uttarakhand, India, are quintessential hill stations offering serene lakes, misty mountains, and colonial charm. 
            Nainital’s shimmering Naini Lake and vibrant Mall Road contrast with Mussoorie’s scenic Gun Hill and tranquil Camel’s Back Road, making them a perfect duo for nature lovers and adventure seekers.
        </p>
        <p>
            In Nainital, boating on Naini Lake under the backdrop of lush hills is a must, while Mussoorie’s Kempty Falls and panoramic viewpoints offer breathtaking vistas. 
            Both towns buzz with local markets, cozy cafes, and a nostalgic vibe, ideal for a refreshing escape from city life. 
            Whether it’s a cable car ride in Mussoorie or a sunset stroll in Nainital, these destinations promise unforgettable memories.
        </p>
        <InfiniteMovingCards items={nm_items} />
    </div>
  );
};

export default NainitalMussoorie;