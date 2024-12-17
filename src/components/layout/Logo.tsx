import React from 'react';
import { CreditCard } from 'lucide-react';
import '../../styles/gold-text.css';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <CreditCard className="w-6 h-6 gold-gradient-text" />
      <span className="text-xl font-display tracking-wide gold-gradient-text gold-shimmer" data-text="MAXXMAI">
        MAXXMAI
      </span>
    </div>
  );
}