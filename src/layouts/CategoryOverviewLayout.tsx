import React from 'react';
import Footer from '../components/Footer';
import MenuCategory from '../components/Menu/Menu';
import HeroContainer from '../components/Hero/HeroContainer';
import MobileMenu from '../components/Menu/MobileMenu';

interface CategoryOverviewLayout {
    children: React.ReactNode;
}

const CategoryOverviewLayout: React.FC<CategoryOverviewLayout> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-dvh bg-gradient-to-b from-[#090D23] to-[#1D2343]">
            {/* Main scrollable container */}
            <div className="flex-grow relative">
                {/* Hero Container */}
                <div className="absolute inset-0 overflow-x-hidden">
                    <HeroContainer
                        images={['BgTest.png', 'PktHome.png']}
                        transitionGradient={['rgba(9, 13, 35, 0.98)', 'rgba(9, 13, 35, 0.95)', 'rgba(9, 13, 35, 0.97)']}
                    />
                </div>

                {/* Overflow wrapper */}
                <div className="relative z-10">
                    <div className="p-4 mb-24">
                        <div className="grid md:grid-cols-[300px_1fr] gap-10">
                            {/* Menu section */}
                            <div className="md:block">
                                <div className='md:hidden flex justify-end mt-8'>
                                    <MobileMenu />
                                </div>
                                <div className="md:sticky md:top-4 md:max-h-[800px] max-h-[600px] h-screen">
                                    <MenuCategory />
                                </div>
                            </div>

                            {/* Main content with overflow control */}
                            <div className="overflow-x-hidden">
                                <div className="flex flex-col">
                                    {/* Spacer */}
                                    <div className="md:h-[700px]" />

                                    {/* Content */}
                                    <div className="w-full">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CategoryOverviewLayout;