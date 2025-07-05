'use client';

import { ApplicationForm } from '@/components/AppForm';
import React from 'react';
// import { TenderForm } from '@/components/TenderForm';


const AppForm = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Tender</h1>
     <ApplicationForm tenderId="Tender" companyId="Company" />
    </div>
  );
};

export default AppForm;