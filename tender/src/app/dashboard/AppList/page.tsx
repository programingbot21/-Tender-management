'use client'
import { ApplicationList } from '@/components/AppList';
import React from 'react';
// import { TenderForm } from '@/components/TenderForm';


const AppList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Application Form</h1>
    <ApplicationList tenderId="Tender"/>
    </div>
  );
};

export default AppList;