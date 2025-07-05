'use client';

import React from 'react';
// import { TenderForm } from '@/components/TenderForm';
import TenForm from '@/components/TenForm';

const TenderPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Tender</h1>
     <TenForm/>
    </div>
  );
};

export default TenderPage;
