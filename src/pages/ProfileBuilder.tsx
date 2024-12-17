import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { BasicDetails } from '../components/profile/BasicDetails';
import { SpendingHabits } from '../components/profile/SpendingHabits';
import { Goals } from '../components/profile/Goals';
import { ProfileLayout } from '../components/profile/ProfileLayout';

export function ProfileBuilder() {
  const navigate = useNavigate();

  const handleNext = (path: string) => {
    navigate(path);
  };

  return (
    <ProfileLayout>
      <Routes>
        <Route 
          path="/" 
          element={
            <BasicDetails onNext={() => handleNext('/profile/spending')} />
          } 
        />
        <Route 
          path="/spending" 
          element={
            <SpendingHabits onNext={() => handleNext('/profile/goals')} />
          } 
        />
        <Route 
          path="/goals" 
          element={
            <Goals onNext={() => handleNext('/summary')} />
          } 
        />
      </Routes>
    </ProfileLayout>
  );
}