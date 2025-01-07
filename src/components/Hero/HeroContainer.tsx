import React from 'react';
import HeroImage from './HeroImage';
import TransitionGradient from '../TransitionGradient';
import HeroText from './HeroText';

interface HeroProps {
  images: string[];  // Changed from single src to images array
  transitionGradient: string[];
  gradientSize?: 'SM' | 'MD' | 'LG';
  transitionDuration?: number;
  intervalDuration?: number;
}

const HeroContainer: React.FC<HeroProps> = ({
  images,
  transitionGradient,
  gradientSize,
  transitionDuration,
  intervalDuration
}) => {
	return (
    <>
		<div className='absolute top-0 left-0 right-0 h-[700px] w-full'>
    <HeroImage
          images={images}
          transitionDuration={transitionDuration}
          intervalDuration={intervalDuration}
        />
			<TransitionGradient gradient={transitionGradient} size={gradientSize} />
		</div>
    <HeroText title='PACKET HUB' description='Discover content platforms from around the world' />
    </>
	);
};

export default HeroContainer;
