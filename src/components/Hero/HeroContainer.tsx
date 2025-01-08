import React from 'react';
import HeroImage from './HeroImage';
import TransitionGradient from '../TransitionGradient';
import HeroText from './HeroText';
import { PktHubLogo } from '../../assets';
import { Link } from 'react-router-dom';

interface HeroProps {
	images: string[]; // Changed from single src to images array
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
			<div className='z-50 absolute top-0 md:left-auto md:right-10 left-10'>
				<Link to='/'>
					<img src={PktHubLogo} alt='Packet Hub Logo' className='w-14 h-14 mx-auto mt-10' />
				</Link>
			</div>
			<HeroText title='PACKET HUB' description='Discover content platforms from around the world' />
		</>
	);
};

export default HeroContainer;
