'use client';

import { TenderList } from '@/components/TenderList';
import React from 'react';


const TenderPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Tender</h1>
      <TenderList/>
    </div>
  );
};

export default TenderPage;
