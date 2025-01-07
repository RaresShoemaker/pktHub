import React, { useState, useEffect, useCallback } from 'react';

interface HeroImageProps {
  images: string[];
  transitionDuration?: number;
  intervalDuration?: number;
}

const HeroImage: React.FC<HeroImageProps> = ({
  images,
  transitionDuration = 1000,
  intervalDuration = 10000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitionToNextImage = useCallback(() => {
    if (images.length < 2) return;
    
    setIsTransitioning(true);
    
    // Set up the next transition after current one completes
    const transitionTimeout = setTimeout(() => {
      setActiveIndex(nextIndex);
      setNextIndex((nextIndex + 1) % images.length);
      setIsTransitioning(false);
    }, transitionDuration);

    return () => clearTimeout(transitionTimeout);
  }, [images.length, nextIndex, transitionDuration]);

  useEffect(() => {
    if (images.length < 2) return;

    const intervalId = setInterval(transitionToNextImage, intervalDuration);
    return () => {
      clearInterval(intervalId);
    };
  }, [images.length, intervalDuration, transitionToNextImage]);

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

  const transitionStyle = {
    transition: `opacity ${transitionDuration}ms ease-in-out`,
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Next image (bottom layer) */}
      <img
        key={`next-${nextIndex}`}
        src={images[nextIndex]}
        alt="Hero Background Next"
        className="absolute inset-0 object-cover h-full w-full"
      />
      
      {/* Current image (top layer) */}
      <img
        key={`active-${activeIndex}`}
        src={images[activeIndex]}
        alt="Hero Background Current"
        className={`absolute inset-0 object-cover h-full w-full`}
        style={{
          ...transitionStyle,
          opacity: isTransitioning ? 0 : 1,
        }}
      />
    </div>
  );
};

export default HeroImage;