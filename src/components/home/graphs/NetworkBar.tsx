import React from 'react';
import { cn } from '../../../utils/cn';
import '../../../styles/gold-text.css';

interface NetworkBarProps {
  percentage: number;
  cardCount: number;
  label: string;
}

export function NetworkBar({ percentage, cardCount, label }: NetworkBarProps) {
  return (
    <div className="flex flex-col items-center group">
      {/* Card count label */}
      <div className="h-6 mb-2">
        <span className="text-sm font-medium gold-gradient-text opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-montserrat">
          {cardCount.toLocaleString()}
        </span>
      </div>

      {/* Bar */}
      <div className="relative w-16 mb-4">
        <div
          className={cn(
            "w-full rounded-lg transition-all duration-500",
            "bg-gradient-to-t from-gold-500/60 to-gold-500/80",
            "group-hover:from-gold-500/80 group-hover:to-gold-500",
          )}
          style={{ 
            height: `${percentage}%`,
            minHeight: '40px',
            boxShadow: '0 0 20px rgba(212, 183, 136, 0.2)'
          }}
        >
          {/* Metallic shine effect */}
          <div 
            className="absolute inset-0 rounded-lg opacity-50"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(212, 183, 136, 0.4) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: 'shine 3s infinite linear'
            }}
          />
        </div>
      </div>
      
      {/* Network label */}
      <span className="text-sm font-medium gold-gradient-text font-montserrat">
        {label}
      </span>
    </div>
  );
}