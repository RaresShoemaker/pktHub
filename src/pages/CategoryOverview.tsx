import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoryOverviewLayout from '../layouts/CategoryOverviewLayout';
import CategoryContainer from '../components/Category/CategoryContainer';
import { CategoryData } from '../mockdata/CAtegoryMockData';

const CategoryOverviewPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  if (category && CategoryData[category]) {
    // If a specific category is selected, show all its cards in a grid
    return (
      <CategoryOverviewLayout>
        <CategoryContainer 
          title={CategoryData[category].title}
          cards={CategoryData[category].data}
          isFullPage={true}
        />
      </CategoryOverviewLayout>
    );
  }

  // If no specific category is selected, show all categories in the horizontal scroll format
  return (
    <CategoryOverviewLayout>
      <div className='flex flex-col gap-4'>
        {Object.entries(CategoryData).map(([key, categoryInfo]) => (
          <CategoryContainer 
            key={key}
            title={categoryInfo.title}
            cards={categoryInfo.data}
            isFullPage={false}
          />
        ))}
      </div>
    </CategoryOverviewLayout>
  );
};

export default CategoryOverviewPage;