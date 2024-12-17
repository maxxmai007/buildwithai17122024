import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/Button';
import { useProfileStore } from '../../store/useProfileStore';

const goalsSchema = z.object({
  priorities: z.array(z.string()).min(1, 'Please select at least one priority'),
});

type GoalsForm = z.infer<typeof goalsSchema>;

const priorities = [
  { id: 'cashback', label: 'Cashback Rewards' },
  { id: 'travel', label: 'Travel Benefits' },
  { id: 'shopping', label: 'Shopping Rewards' },
  { id: 'dining', label: 'Dining Benefits' },
  { id: 'lounge', label: 'Airport Lounge Access' },
  { id: 'insurance', label: 'Travel Insurance' },
];

interface GoalsProps {
  onNext: () => void;
}

export function Goals({ onNext }: GoalsProps) {
  const { goals, setGoals } = useProfileStore();
  
  const { register, handleSubmit, formState: { errors } } = useForm<GoalsForm>({
    resolver: zodResolver(goalsSchema),
    defaultValues: {
      priorities: goals,
    },
  });

  const onSubmit = (data: GoalsForm) => {
    setGoals(data.priorities);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gold-500/80 mb-4">
          Select Your Card Priorities
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {priorities.map((priority) => (
            <label
              key={priority.id}
              className="flex items-center p-4 border border-gold-500/20 rounded-lg cursor-pointer hover:border-gold-500/40 transition-colors"
            >
              <input
                type="checkbox"
                value={priority.id}
                className="w-4 h-4 text-gold-500 border-gold-500/20 rounded focus:ring-gold-500"
                {...register('priorities')}
              />
              <span className="ml-3 text-sm text-gold-500/80">
                {priority.label}
              </span>
            </label>
          ))}
        </div>
        {errors.priorities && (
          <p className="mt-2 text-sm text-red-500">{errors.priorities.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Review Summary
      </Button>
    </form>
  );
}