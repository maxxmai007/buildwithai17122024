import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useProfileStore } from '../../store/useProfileStore';

const spendingSchema = z.object({
  groceries: z.string().min(1, 'Please enter your grocery spending'),
  dining: z.string().min(1, 'Please enter your dining spending'),
  shopping: z.string().min(1, 'Please enter your shopping spending'),
  travel: z.string().min(1, 'Please enter your travel spending'),
});

type SpendingForm = z.infer<typeof spendingSchema>;

interface SpendingHabitsProps {
  onNext: () => void;
}

export function SpendingHabits({ onNext }: SpendingHabitsProps) {
  const { spendingHabits, setSpendingHabits } = useProfileStore();
  
  const { register, handleSubmit, formState: { errors } } = useForm<SpendingForm>({
    resolver: zodResolver(spendingSchema),
    defaultValues: spendingHabits || undefined,
  });

  const onSubmit = (data: SpendingForm) => {
    setSpendingHabits(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Monthly Grocery Spending"
        type="number"
        placeholder="Enter amount"
        error={errors.groceries?.message}
        {...register('groceries')}
      />

      <Input
        label="Monthly Dining Spending"
        type="number"
        placeholder="Enter amount"
        error={errors.dining?.message}
        {...register('dining')}
      />

      <Input
        label="Monthly Shopping Spending"
        type="number"
        placeholder="Enter amount"
        error={errors.shopping?.message}
        {...register('shopping')}
      />

      <Input
        label="Monthly Travel Spending"
        type="number"
        placeholder="Enter amount"
        error={errors.travel?.message}
        {...register('travel')}
      />

      <Button type="submit" className="w-full">
        Next Step
      </Button>
    </form>
  );
}