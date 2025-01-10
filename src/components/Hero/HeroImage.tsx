import React from 'react';
import { useTransitionAnimation } from '../../context/TransitionAnimationContext/TransitionAnimationContext';
import { TRANSITION_DURATION } from '../../context/TransitionAnimationContext/constants';

const HeroImage: React.FC = () => {
  const { activeIndex, isTransitioning, nextIndex, category } = useTransitionAnimation();

  const getImagesByCategory = (category: string | null): string[] => {
    switch (category) {
      case 'home':
        return [
          '/Home1.svg', '/Home2.svg', '/Home3.svg'
        ];
      case 'media':
        return [
          '/Media1.svg', '/Media2.svg', '/Media3.svg'
        ];
      case 'music':
        return [
          '/Music1.svg', '/Music2.svg', '/Music3.svg'
        ];
      case 'games':
        return [
          '/Games1.svg', '/Games2.svg', '/Games3.svg'
        ];
      case 'casino':
        return [
          '/Casino1.svg', '/Casino2.svg', '/Casino3.svg', '/Casino4.svg'
        ];
      case 'technology':
        return [
          '/Technology1.svg', '/Technology2.svg', '/Technology3.svg'
        ];
      default:
        return [
          '/Home1.svg', '/Home2.svg', '/Home3.svg'
        ];
    }
  };

  const images = getImagesByCategory(category);

  if (!images || images.length === 0) return null;
  
  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt="Hero Background"
        className="absolute inset-0 object-cover h-full w-full"
      />
    );
  }

  const currentImageIndex = activeIndex % images.length;
  const nextImageIndex = nextIndex % images.length;

  const transitionStyle = {
    transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Next image (bottom layer) */}
      <img
        key={`next-${nextImageIndex}`}
        src={images[nextImageIndex]}
        alt="Hero Background Next"
        className="absolute inset-0 object-cover h-full w-full"
      />
      
      {/* Current image (top layer) */}
      <img
        key={`active-${currentImageIndex}`}
        src={images[currentImageIndex]}
        alt="Hero Background Current"
        className="absolute inset-0 object-cover h-full w-full"
        style={{
          ...transitionStyle,
          opacity: isTransitioning ? 0 : 1,
        }}
      />
    </div>
  );
};

export default HeroImage;