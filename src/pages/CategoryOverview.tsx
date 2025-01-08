import React from 'react';
import CategoryOverviewLayout from '../layouts/CategoryOverviewLayout';
import CategoryContainer from '../components/Category/CategoryContainer';
import { homeMockData } from '../mockdata/HomeMockData';

const CategoryOverviewPage: React.FC = () => {
  return (
    <CategoryOverviewLayout>
      <div className='flex flex-col gap-4'>
      <CategoryContainer title='Media' cards={homeMockData} />
      <CategoryContainer title='Media' cards={homeMockData} />
      <CategoryContainer title='Media' cards={homeMockData} />
      <CategoryContainer title='Media' cards={homeMockData} />
      <CategoryContainer title='Media' cards={homeMockData} />
      </div>
    </CategoryOverviewLayout>
  );
};

export default CategoryOverviewPage;