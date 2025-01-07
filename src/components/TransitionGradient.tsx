import React from 'react';

interface TransitionGradientProps {
  gradient: string[];
  size?: "SM" | "MD" | "LG";
}

const TransitionGradient: React.FC<TransitionGradientProps> = ({
  gradient = ["rgba(9, 13, 35, 0.98)"],
}) => {
	return (
		<>
			<div
				className='absolute w-screen flex-shrink-0'
				style={{
					bottom: '-215px',
					height: '429px',
					background: gradient[0],
					filter: 'blur(44px)',
					zIndex: 1,
					left: '50%',
					transform: 'translateX(-50%)',
					width: '100%'
				}}
			/>
			<div
				className='absolute w-screen flex-shrink-0'
				style={{
					bottom: '-355px',
					height: '429px',
					background: gradient.length > 1 ? gradient[1] : gradient[0],
					filter: 'blur(54px)',
					zIndex: 1,
					left: '50%',
					transform: 'translateX(-50%)',
					width: '100%'
				}}
			/>
			<div
				className='absolute w-screen flex-shrink-0'
				style={{
					bottom: '-315px',
					height: '429px',
					background: gradient.length > 2 ? gradient[2] : gradient[0],
					filter: 'blur(64px)',
					zIndex: 1,
					left: '50%',
					transform: 'translateX(-50%)',
					width: '100%'
				}}
			/>
		</>
	);
};

export default TransitionGradient;
