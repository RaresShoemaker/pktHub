import React from 'react';
import CategoryOverviewLayout from '../layouts/CategoryOverviewLayout';

const CategoryOverviewPage: React.FC = () => {
  return (
    <CategoryOverviewLayout>
      <div className='bg-green-500 rounded-lg'>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="p-4 border-b">
            Scrollable content section {i + 1}
          </div>
        ))}
      </div>
    </CategoryOverviewLayout>
  );
};

export default CategoryOverviewPage;