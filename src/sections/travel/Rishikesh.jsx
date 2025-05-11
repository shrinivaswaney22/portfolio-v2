import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { r_items } from '@/data';
import React from 'react';

const Rishikesh = () => {
  return (
    <div id='rishikesh' className="mt-16 text-center max-w-4xl text-white-50 space-y-4">
        <h3 className="text-2xl font-semibold text-white">🧘 Rishikesh</h3>
        <p>
            Rishikesh, nestled in the foothills of the Himalayas in Uttarakhand, India, is a spiritual haven and adventure hub known as the "Yoga Capital of the World." 
            With the sacred Ganges River flowing through, it offers a blend of serene ashrams, vibrant ghats, and thrilling outdoor activities, attracting seekers and thrill-seekers alike.
        </p>
        <p>
            In Rishikesh, witness the mesmerizing Ganga Aarti at Triveni Ghat, explore historic sites like the Beatles Ashram, or embark on white-water rafting and bungee jumping adventures. 
            The iconic Laxman Jhula and Ram Jhula bridges, bustling markets, and vegan-friendly cafes create a unique vibe, perfect for spiritual retreats or an adrenaline-pumping getaway.
        </p>
        <InfiniteMovingCards items={r_items} />
    </div>
  );
};

export default Rishikesh;