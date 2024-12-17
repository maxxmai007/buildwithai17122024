import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useProfileStore } from '../../store/useProfileStore';

const basicDetailsSchema = z.object({
  income: z.string().min(1, 'Please enter your monthly income'),
  occupation: z.string().min(1, 'Please enter your occupation'),
  city: z.string().min(1, 'Please enter your city'),
});

type BasicDetailsForm = z.infer<typeof basicDetailsSchema>;

interface BasicDetailsProps {
  onNext: () => void;
}

export function BasicDetails({ onNext }: BasicDetailsProps) {
  const { basicDetails, setBasicDetails } = useProfileStore();
  
  const { register, handleSubmit, formState: { errors } } = useForm<BasicDetailsForm>({
    resolver: zodResolver(basicDetailsSchema),
    defaultValues: basicDetails || undefined,
  });

  const onSubmit = (data: BasicDetailsForm) => {
    setBasicDetails(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Monthly Income"
        type="number"
        placeholder="Enter your monthly income"
        error={errors.income?.message}
        {...register('income')}
      />

      <Input
        label="Occupation"
        placeholder="Enter your occupation"
        error={errors.occupation?.message}
        {...register('occupation')}
      />

      <Input
        label="City"
        placeholder="Enter your city"
        error={errors.city?.message}
        {...register('city')}
      />

      <Button type="submit" className="w-full">
        Next Step
      </Button>
    </form>
  );
}