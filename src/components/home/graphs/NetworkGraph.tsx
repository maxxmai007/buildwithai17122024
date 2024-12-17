import React from 'react';
import { NetworkTitle } from './NetworkTitle';
import { NetworkBar } from './NetworkBar';

const networkData = [
  { network: 'Discover', cardCount: 2500, percentage: 25 },
  { network: 'Rupay', cardCount: 4000, percentage: 40 },
  { network: 'Mastercard', cardCount: 6500, percentage: 65 },
  { network: 'Visa', cardCount: 10000, percentage: 100 }
];

export function NetworkGraph() {
  return (
    <div className="relative w-full h-full flex flex-col p-6">
      <NetworkTitle />
      
      {/* Graph container with proper spacing */}
      <div className="flex-1 flex items-end justify-between gap-6 mt-8">
        {networkData.map((item) => (
          <NetworkBar
            key={item.network}
            percentage={item.percentage}
            cardCount={item.cardCount}
            label={item.network}
          />
        ))}
      </div>
    </div>
  );
}