import React from 'react';
import { CategoryCardProps } from './CategoryCard';
import { ChevronRight } from 'lucide-react';
import CategoryCard from './CategoryCard';
import GradientDivider from './GradientDivider';

interface CategoryContainerProps {
	title: string;
	cards: CategoryCardProps[];
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({ title, cards }) => {
	return (
		<div className='flex flex-col gap-4 w-full'>
			{/* Title section */}
			<div className='flex items-center gap-1 text-white'>
				<p className='font-bold'>{title}</p>
				<ChevronRight className='w-5 h-5' />
			</div>

			{/* Scrollable container with width constraints */}
			<div className='w-full'>
				<div className='max-w-full overflow-x-auto no-scrollbar'>
					<div className='inline-flex gap-4'>
						{cards.map((card, index) => (
							<div key={index} className='shrink-0'>
								<CategoryCard {...card} />
							</div>
						))}
						<div className='flex text-white max-h-[120px] max-w-[224.5px] w-[120px] h-[100px] md:h-[120px] items-center'>
							<p className='font-semibold underline underline-offset-4'>See more</p>
							<ChevronRight />
						</div>
					</div>
				</div>
			</div>

			{/* Divider */}
			<div className='w-full'>
				<GradientDivider />
			</div>
		</div>
	);
};

export default CategoryContainer;
