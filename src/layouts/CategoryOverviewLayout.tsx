import React from 'react';
import Footer from '../components/Footer';
import MenuCategory from '../components/Menu/Menu';
import HeroContainer from '../components/Hero/HeroContainer';

interface CategoryOverviewLayout {
	children: React.ReactNode;
}

const CategoryOverviewLayout: React.FC<CategoryOverviewLayout> = ({ children }) => {
	return (
		<div className='flex flex-col min-h-dvh bg-gradient-to-b from-[#090D23] to-[#1D2343]'>
			{/* Main content area */}
			<div className='relative flex-grow'>
				<HeroContainer
					images={['BgTest.png', 'PktHome.png']}
					transitionGradient={['rgba(9, 13, 35, 0.98)', 'rgba(9, 13, 35, 0.95)', 'rgba(9, 13, 35, 0.97)']}
				/>

				{/* Content Grid with Menu Overlay */}
				<div className='relative z-10 p-4'>
					<div className='grid md:grid-cols-[300px_1fr] gap-10'>
						{/* Menu section - will overlay on the hero image */}
						<div className='max-h-[800px] h-screen md:sticky md:top-4'>
							<MenuCategory />
						</div>

						{/* Main content section */}
						<div className='flex flex-col'>
							{/* Spacer to push content below hero image */}
							<div className='md:h-[700px]' />

							{/* Actual content */}
							<div className='w-full'>{children}</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default CategoryOverviewLayout;
